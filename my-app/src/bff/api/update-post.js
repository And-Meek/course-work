import { HOST, PORT } from '../../constants';

export const updatePost = ({ id, imageUrl, title, content }) =>
	fetch(`${HOST}:${PORT}/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((loadedPost) => loadedPost.json());
