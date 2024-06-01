import { HOST, PORT } from '../../constants';
import { generateDate } from '../utils/generate-date';

export const addUser = (login, password) =>
	fetch(`${HOST}:${PORT}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registred_at: generateDate(),
			role_id: 2,
		}),
	}).then((createdUser) => createdUser.json());
