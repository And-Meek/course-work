import { HOST, PORT } from '../../constants';

export const getUser = async (loginToFind) =>
	fetch(`${HOST}:${PORT}/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser);
