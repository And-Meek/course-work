import { HOST, PORT } from '../../constants';

export const deleteUser = (userId, roleId) =>
	fetch(`${HOST}:${PORT}/users/${userId}`, {
		method: 'DELETE',
	});
