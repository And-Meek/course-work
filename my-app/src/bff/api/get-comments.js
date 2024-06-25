import { HOST, PORT } from '../../constants';
import { transformComment } from '../transformers';

const ALL_COMMENTS_URL = `${HOST}:${PORT}/comments`;
const POST_COMMENTS_URL = `${HOST}:${PORT}/comments?post_id=`;

export const getComments = (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;

	return fetch(url)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments.map(transformComment));
};
