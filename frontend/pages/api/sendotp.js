// call end point: http://localhost:5000/api/sendOTP

import { API_URL } from '@/config/index'
export default async function handler(req, res) {
	console.log(API_URL)
	console.log(req.body)
	const { phone } = req.body
	const response = await fetch(`${API_URL}/api/otp/sendotp`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ phone }),
	})
	const data = await response.json()
	console.log(data)
	res.status(200).json(data)
}
