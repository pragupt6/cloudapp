import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NEXT_URL, API_URL } from '@/config/index'
// import styles from '../styles/Home.module.css'
import Authcontext from '@/context/Authcontext'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	console.log('Logging')
	const context = React.useContext(Authcontext)
	const { user, checkUserLoggedIn } = context
	const router = useRouter()
	if (user) {
		router.push('/Landing')
	}

	const [errors, setError] = React.useState(null)
	let [loading, setLoading] = React.useState(false)
	let [msg, setMsg] = React.useState(null)
	let [otp, setOtp] = React.useState(false)
	let [otpValue, setOtpValue] = React.useState(null)
	let [phoneNumber, setPhone] = React.useState(null)
	React.useEffect(() => {
		//!otp ? (document.querySelector('input').value = '') : null
		console.log('I am in the useEffect')
		console.log("User's value is: ", user)
		if (user) {
			router.push('/Landing')
		}
	}, [user])

	const sendOTP = async (e) => {
		setLoading(true)
		setError(false)
		setMsg(null)
		const phone = document.querySelector('input').value
		console.log(phone)
		// fetch(`${NEXT_URL}/api/sendotp`, {
		await fetch(`${API_URL}/api/otp/sendotp`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ phone }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setMsg(data?.message)
				setLoading(false)
				// setError(false)
				data?.error || data.error == null ? setOtp(false) : setOtp(true)
				data?.error || data.error == null ? setError(true) : setError(false)
			})
			.catch((err) => {
				console.log(err)
				setMsg(err.message)
				setError(true)
				setLoading(false)
				// data?.error || data.error == null ? setOtp(false) : setOtp(true)
				// data?.error || data.error == null ? setError(true) : setError(false)
			})
		// setLoading(false)
	}

	const verifyOTP = async (e) => {
		setLoading(true)
		await fetch(`${API_URL}/api/otp/verifyotp`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({ otp: otpValue, phone: phoneNumber }),
		})
			.then((res) => res.json())
			.then((data) => {
				setMsg(data.message)
				console.log(data)
				setLoading(false)
				data.error || data.error == null ? setError(true) : setError(false)
				if (!data.error) {
					checkUserLoggedIn()
					// router.push('/Landing')
				}
			})
			.catch((err) => {
				console.log('Error occured while verifying OTP')
				console.log(err)
				setMsg(data.message)
				setLoading(false)
				data.error || data.error == null ? setError(true) : setError(false)
			})
	}

	return (
		<>
			{/* {<pre>{JSON.stringify({ loading, errors, otp }, null, 2)}</pre>} */}
			<Head>
				<title>Cloud App</title>
				<meta name='description' content='cloud app to manage content' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section>
				{/* vertically and horizontally center align a div */}
				<form
					onSubmit={(e) => {
						e.preventDefault()
						setLoading(true)
						sendOTP(e)
					}}
				>
					<div
						style={{
							display: 'flex',
							gap: '1rem',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '80vh',
						}}
					>
						<h1>Welcome to SMS App!</h1>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								// gap: '1rem',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<span
								style={{
									fontFamily: inter,
									fontSize: '1.5rem',
								}}
							>
								+91-
							</span>
							<input
								type='text'
								style={{
									display: 'block',
									fontFamily: inter,
									fontSize: '1.5rem',
									padding: '0.5rem',
									border: '1px solid #ccc',
									borderRadius: '0.5rem',
									outline: 'none',
									width: '60%',
									maxWidth: '160px',
									margin: '0 auto',
								}}
								disabled={otp}
								onKeyDown={(e) => {
									console.log(e.key)
									// accept only numbers backspace and delete and allow only 10 digits
									if (
										e.key !== 'Backspace' &&
										e.key !== 'Delete' &&
										!/[0-9]/.test(e.key)
									) {
										e.preventDefault()
									}
								}}
								onChange={(e) => {
									setPhone(e.target.value)
								}}
							/>
						</div>
						{loading && !otp ? <div>Sending SMS...</div> : null}
						{loading && otp ? <div>Verifying OTP...</div> : null}
						{msg ? (
							<div
								style={
									errors
										? { color: 'red', fontSize: 'small' }
										: { color: 'green', fontSize: 'small' }
								}
							>
								{msg}
							</div>
						) : null}
						{!otp ? (
							<>
								<button
									style={{
										fontFamily: inter,
										fontSize: '1.5rem',
										padding: '0.5rem',
										// border: '1px solid #ccc',
										// borderRadius: '0.5rem',
										// outline: 'none',
										width: '50%',
										maxWidth: '150px',
										margin: '0 auto',
									}}
									type='submit'
									// disabled={otp}
								>
									Send OTP
								</button>
							</>
						) : (
							<>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										// gap: '1rem',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<span>Verify OTP</span>
									<input
										type='text'
										style={{
											display: 'block',
											fontFamily: inter,
											fontSize: '1.5rem',
											padding: '0.5rem',
											border: '1px solid #ccc',
											borderRadius: '0.5rem',
											outline: 'none',
											width: '30%',
											maxWidth: '100px',
											margin: '0 auto',
										}}
										onChange={(e) => {
											setOtpValue(e.target.value)
										}}
										disabled={false}
										onKeyDown={(e) => {
											console.log(e.key)
											// accept only numbers backspace and delete and allow only 10 digits
											if (
												e.key !== 'Backspace' &&
												e.key !== 'Delete' &&
												!/[0-9]/.test(e.key)
											) {
												e.preventDefault()
											}
										}}
									/>
								</div>
								<button
									style={{
										fontFamily: inter,
										fontSize: '1.5rem',
										padding: '0.5rem',
										// border: '1px solid #ccc',
										// borderRadius: '0.5rem',
										// outline: 'none',
										width: '30%',
										maxWidth: '100px',
										margin: '0 auto',
									}}
									type='button'
									// disabled={otp}
									onClick={(e) => {
										e.preventDefault()
										console.log('verify')
										verifyOTP(e)
									}}
								>
									Verify
								</button>
							</>
						)}
					</div>
				</form>
			</section>
		</>
	)
}
