import express from 'express'
import asyncHandler from 'express-async-handler'
import OTP from '../models/OTP.js'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import otpGenerator from 'otp-generator'
// import { trim } from 'lodash'
const router = express.Router()
// @desc Send OTP
// @route POST /api/sendotp
// @access Public
router.post(
	'/sendotp',
	asyncHandler(async (req, res) => {
		const { phone } = req.body
		const otp = otpGenerator.generate(4, {
			lowerCaseAlphabets: false,
			upperCaseAlphabets: false,
			specialChars: false,
		})
		console.log(otp)
		if (phone.length !== 10 || !phone.match(/^[0-9]+$/) || phone === '') {
			res.status(400)
			throw new Error('Invalid phone number')
		}

		const salt = await bcrypt.genSalt(9)
		const encryptedOtp = await bcrypt.hash(otp, salt)
		console.log('====================================')
		console.log(phone, otp)
		console.log('====================================')
		const otpExists = await OTP.findOne({ phone })
		if (otpExists) {
			//only 10 otps are allowed, else throw error
			if (otpExists.otp.length >= 10) {
				res.status(400)
				throw new Error('You reached your limit of 10 OTPs for the day')
			}
			otpExists.otp.push(encryptedOtp)
			const updatedOtp = await otpExists.save()
			res.status(200).json({
				message: 'OTP sent successfully',
				error: false,
				otp: updatedOtp,
			})
		} else {
			const otp1 = await OTP.create({
				phone,
				otp: [encryptedOtp],
			})
			res.status(201).json({
				message: 'OTP sent successfully',
				error: false,
				otp: otp1,
			})
		}
	})
)

// @desc Verify OTP
// @route POST /api/verifyotp
// @access Public
router.post(
	'/verifyotp',
	asyncHandler(async (req, res) => {
		const { phone, otp } = req.body
		console.log(phone, otp)
		let phoneOtpNullOrEmpty = false
		if (phone === '' || otp === '' || phone == null || otp == null) {
			phoneOtpNullOrEmpty = true
		}
		const otpExists = await OTP.findOne({
			phone,
		})

		if (phone === '' || otp === '') {
			res.status(400)
			res.json({
				message: 'Invalid or Expired OTP/ Phone Number',
				user: null,
				error: true,
				token: null,
			})
			//throw new Error('Invalid phone number or OTP')
			return false
		}
		if (phone == null || otp == null) {
			res.status(400)
			res.json({
				message: 'Invalid or Expired OTP/ Phone Number',
				user: null,
				error: true,
				token: null,
			})
			// throw new Error('Invalid phone number or OTP')
			return false
		}
		if (otpExists) {
			const recentOTP = otpExists.otp[otpExists.otp.length - 1]
			const isMatch = await bcrypt.compare(otp, recentOTP)
			const existingUser = await User.findOne({ phone })
			//check if user exists
			if (existingUser) {
				if (isMatch) {
					const token = existingUser.generateAuthToken()
					// res.cookie('access_token', token)
					res.cookie('smsapp_accesstoken', token, {
						httpOnly: true,
						secure: false,
						// exires in 1 month
						expires: new Date(Date.now() + 2592000000),
					})
					res.json({
						message: 'OTP Verified',
						error: false,
						user: existingUser,
						token: existingUser.generateAuthToken(),
					})
					//delete OTP document
					const deletePhone = await OTP.findOneAndDelete({ phone })
				} else {
					res.status(401)
					res.json({
						message: 'Invalid or Expired OTP',
						user: null,
						error: true,
						token: null,
					})
					// throw new Error('Invalid OTP')
					return false
				}
			} else {
				// create a new user
				if (isMatch) {
					const user = await User.create({
						phone,
						isAdmin: false,
					})
					const token = user.generateAuthToken()
					// res.cookie('access_token', token)
					res.cookie('smsapp_accesstoken', token, {
						httpOnly: true,
						secure: process.env.NODE_ENV === 'production' ? true : false,
						sameSite: 'none',

						// any domain
						domain: process.env.COOKIE_DOMAIN,
						// exires in 1 month
						expires: new Date(Date.now() + 2592000000),
					})
					res.json({
						message: 'OTP Verified',
						user,
						error: false,
						token: token,
					})
					//delete OTP document
					const deletePhone = await OTP.findOneAndDelete({ phone })
				} else {
					res.status(401)
					res.json({
						message: 'Invalid or Expired OTP',
						user: null,
						error: true,
						token: null,
					})
					// throw new Error('Invalid OTP')
					return false
				}
			}
		}
		// else {
		// 	res.status(404)
		// 	throw new Error('Invalid Mobile Number')
		// }
	})
)
export default router
