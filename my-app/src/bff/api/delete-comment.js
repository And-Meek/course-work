import { HOST, PORT } from '../../constants';

export const deleteComment = async (commentId) =>
	fetch(`${HOST}:${PORT}/comments/${commentId}`, {
		method: 'DELETE',
	});
