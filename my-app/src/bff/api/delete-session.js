import { HOST, PORT } from '../../constants';

export const deleteSession = async (sessionId) =>
	fetch(`${HOST}:${PORT}/sessions/${sessionId}`, {
		method: 'DELETE',
	});
