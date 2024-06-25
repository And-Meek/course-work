import { HOST, PORT } from '../../constants';
import { transformPost } from '../transformers';

export const getPosts = () =>
	fetch(`${HOST}:${PORT}/posts`)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => loadedPosts && loadedPosts.map(transformPost));
