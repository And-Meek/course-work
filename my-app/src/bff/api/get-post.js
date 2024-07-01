import { HOST, PORT } from '../../constants';
import { transformPost } from '../transformers';

export const getPost = async (postId) =>
	fetch(`${HOST}:${PORT}/posts/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}
			const error =
				res.status === 404
					? 'Такая страница не существует'
					: 'Что-то пошло не так. Попробуйте еще раз позднее';

			return Promise.reject(error);
		})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
