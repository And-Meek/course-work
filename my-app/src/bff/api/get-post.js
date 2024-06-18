import { HOST, PORT } from '../../constants';
import { transformPost } from '../transformers';

export const getPost = async (postId) =>
	fetch(`${HOST}:${PORT}/posts/${postId}`)
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
