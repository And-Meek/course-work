import { HOST, PORT } from '../../constants';

export const deletePost = (postId) =>
	fetch(`${HOST}:${PORT}/posts/${postId}`, {
		method: 'DELETE',
	});
