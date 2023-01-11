import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
const router = express.Router()
// @desc Auth user & get token
// @route GET /api/users/login
// @access Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		// log the token from the request header;
		try {
			console.log(
				'============request header token111111========================'
			)
			const token = req.cookies.smsapp_accesstoken
			console.log('token: ', token)
			// check if token is null or undefined
			if (token == null || token === undefined || token === '') {
				res.status(401)
				res.json({
					message: 'Invalid or Expired Token1111',
					user: null,
					error: true,
					token: null,
				})
				return false
			}
			// check if token is valid
			console.log('now checking token', token)
			console.log('now checking token', process.env.JWT_SECRET)
			const decoded = jwt.verify(
				token,
				process.env.JWT_SECRET,
				async (err, decoded) => {
					console.log('decoded: ', decoded)
					console.log('err: ', err)
					console.log('decoded._id: ', decoded._id)
					if (err) {
						res.status(401)
						res.json({
							message: 'Invalid or Expired Token',
							user: null,
							error: true,
							token: null,
						})
						return false
					} else {
						// return user
						const user = await User.findById(decoded._id)
						res.json({
							message: 'Valid Token',
							user: user,
							error: false,
							token: token,
						})
						return false
					}
				}
			)
		} catch (error) {
			console.log(error)
			res.status(401)
			res.json({
				message: 'Invalid or Expired Token2222',
				user: null,
				error: true,
				token: null,
			})
			return false
		}
	})
)
export default router
