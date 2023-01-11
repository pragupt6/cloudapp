const Host = 'https://pg6reactapps.mongo.cosmos.azure.com'
const AuthKey =
	'mongodb://pg6reactapps:UldBYz6DXixDPm8FOSBjtcnWcWqt2xxhjbeWBOfQ9LJQpK2mkYZB7He5ASfT47nTFY76aylwQFAezW0rQfH5jA==@pg6reactapps.mongo.cosmos.azure.com:10255/cloudapp?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@pg6reactapps@'
const DBId = 'cloudapp'
const ContainerName = 'OTP'
const UserName = 'pg6reactapps'
const password =
	'UldBYz6DXixDPm8FOSBjtcnWcWqt2xxhjbeWBOfQ9LJQpK2mkYZB7He5ASfT47nTFY76aylwQFAezW0rQfH5jA=='

const config = {
	host: Host,
	authKey: AuthKey,
	databaseId: DBId,
	containerId: ContainerName,
	userName: UserName,
	password: password,
}
export default config
