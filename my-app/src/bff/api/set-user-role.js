import { HOST, PORT } from '../../constants';

export const setUserRole = (userId, roleId) =>
	fetch(`${HOST}:${PORT}/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			role_id: roleId,
		}),
	});
