// create a web server
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import { CosmosClient } from '@azure/cosmos'
import config from './config/config.js'
import UserRoute from './routes/UserRoute.js'
import OTPRoutes from './routes/OTPRoutes.js'
import CheckUserRoute from './routes/CheckUserRoute.js'
import LogOutRoute from './routes/LogOutRoute.js'
import cookieParser from 'cookie-parser'
const app = express()
app.use(express.json())
dotenv.config()
connectDB()
const corsOptions = {
	// origin: 'http://localhost:3000',
	origin:
		process.env.NODE_ENV === 'production'
			? process.env.ORIGIN
			: ['http://localhost:3000', 'http://192.168.1.7:3000'],
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
}
app.set('trust proxy', 1)
app.use(cors(corsOptions))
app.use(cookieParser())
// use body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/otp', OTPRoutes)
app.use('/api/otps', UserRoute)
app.use('/api/checkuser', CheckUserRoute)
app.use('/api/logout', LogOutRoute)
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')))

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	)
} else {
	app.get('/', (req, res) => {
		res.send('API is running....')
	})
}
app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT || 5000
app.listen(
	port,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${port}`.yellow.bold
	)
)
