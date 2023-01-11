import mongoose from 'mongoose'
import { CosmosClient } from '@azure/cosmos'
import config from './config.js'
const connectDB = async () => {
	try {
		mongoose
			.set('strictQuery', true)
			.connect(config.authKey, {
				useUnifiedTopology: true,
				useNewUrlParser: true,

				auth: {
					username: config.userName,
					password: config.password,
				},
			})
			.then(() => console.log('Connection to CosmosDB successful'.cyan.bold))
			.catch((err) => console.error(err))
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		console.log(error.stack)
		process.exit(1)
	}
}

export default connectDB
