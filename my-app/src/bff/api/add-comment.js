import { HOST, PORT } from '../../constants';
import { generateDate } from '../utils/generate-date';

export const addComment = (userId, postId, content) =>
	fetch(`${HOST}:${PORT}/comments`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			published_at: generateDate(),
			content,
		}),
	});
