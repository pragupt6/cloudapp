// create a user route
// Compare this snippet from backend\routes\UserRoute.js:
import express from 'express'
import asyncHandler from 'express-async-handler'
import OTP from '../models/OTP.js'
const router = express.Router()
// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		// log the token from the request header;
		try {
			console.log('============request header token========================')
			console.log(req.cookies.smsapp_accesstoken)
			const otps = await OTP.find({})
			res.json(otps)
		} catch (error) {}
	})
)
export default router
