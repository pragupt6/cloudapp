import React, { useEffect } from 'react'
import Authcontext from '@/context/Authcontext'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Landing = () => {
	const context = React.useContext(Authcontext)
	const { user, logOut } = context
	const router = useRouter()
	React.useEffect(() => {
		if (!user) {
			router.push('/')
		}
	}, [user])
	return (
		<div>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '1rem',
						backgroundColor: '#ccc',
					}}
				>
					<h1>Welcome {user?.phone}, You are signed in</h1>

					<div>
						<Link href={'#'} onClick={logOut}>
							Sign Out
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing
