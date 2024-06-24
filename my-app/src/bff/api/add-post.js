import { HOST, PORT } from '../../constants';
import { generateDate } from '../utils/generate-date';

export const addPost = ({ imageUrl, title, content }) =>
	fetch(`${HOST}:${PORT}/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			published_at: generateDate(),
			content,
		}),
	}).then((createdPost) => createdPost.json());
