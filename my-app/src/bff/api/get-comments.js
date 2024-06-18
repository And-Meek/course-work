import { HOST, PORT } from '../../constants';
import { transformComment } from '../transformers';

export const getComments = (postId) =>
	fetch(`${HOST}:${PORT}/comments?post_id=${postId}`)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments.map(transformComment));
