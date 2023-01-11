// create and export a Otp model with phone and otp fields
// Compare this snippet from backend\models\OTP.js:
import mongoose from 'mongoose'
const otpSchema = new mongoose.Schema(
	{
		phone: {
			type: String,
			required: true,
		},
		otp: [
			{
				type: String,
				required: true,
			},
		],
	},
	{
		timestamps: true,
		expireAfterSeconds: 60,
	}
)
const OTP = mongoose.model('OTP', otpSchema, 'OTP')
export default OTP
