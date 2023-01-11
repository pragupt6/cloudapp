// create a user schema and model
// Compare this snippet from backend\models\User.js:
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: false,
			unique: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

// Generate auth token
userSchema.methods.generateAuthToken = function () {
	console.log('generateAuthToken')
	const token = jwt.sign(
		{
			_id: this._id,
			phone: this.phone,
			isAdmin: this.isAdmin,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '30d',
		}
	)
	console.log(token)
	return token
}

const User = mongoose.model('User', userSchema, 'User')
export default User
