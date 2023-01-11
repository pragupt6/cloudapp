import React from 'react'
import { NEXT_URL, API_URL } from '@/config/index'
// create a auth context
const AuthContext = React.createContext()
// create a provider
export const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState(null)
	const [loading, setLoading] = React.useState(false)
	const checkUserLoggedIn = async () => {
		setLoading(true)
		try {
			await fetch(`${API_URL}/api/checkuser`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			})
				.then((res) => res.json())
				.then((data) => {
					setUser(data.user)
					setLoading(false)
					console.log('logging from authcontext')
					console.log(data)
				})
		} catch (error) {
			console.log(error)
			// setLoading(false)
		}
	}

	const logOut = async () => {
		setLoading(true)
		try {
			await fetch(`${API_URL}/api/logout`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			})
				.then((res) => res.json())
				.then((data) => {
					setUser(null)
					setLoading(false)
					console.log('logging from authcontext')
					console.log(data)
				})
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	React.useEffect(() => {
		checkUserLoggedIn()
		console.log("I'm in the auth context")
	}, [])

	return (
		<AuthContext.Provider value={{ user, logOut, checkUserLoggedIn }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
