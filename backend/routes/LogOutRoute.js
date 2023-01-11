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
		try {
			//clear the cookies and logout
			res.clearCookie('smsapp_accesstoken')
			console.log('cleared cookie')
			res.json({
				message: 'User Logged Out',
				user: null,
				error: false,
				token: null,
			})
			return false
		} catch (error) {
			res.status(401)
			res.json({
				message: 'Invalid or Expired Token',
				user: null,
				error: true,
				token: null,
			})
		}
	})
)
export default router
