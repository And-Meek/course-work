import { HOST, PORT } from '../../constants';

export const getUsers = () =>
	fetch(`${HOST}:${PORT}/users`).then((loadedUsers) => loadedUsers.json());
