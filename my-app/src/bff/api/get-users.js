import { HOST, PORT } from '../../constants';
import { transformUser } from '../transformers';

export const getUsers = () =>
	fetch(`${HOST}:${PORT}/users`)
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser));
