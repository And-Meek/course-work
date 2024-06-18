import { HOST, PORT } from '../../constants';

export const addSession = (hash, user) =>
	fetch(`${HOST}:${PORT}/sessions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			hash,
			user,
		}),
	});
