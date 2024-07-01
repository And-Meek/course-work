import { HOST, PORT } from '../../constants';
import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) =>
	fetch(`${HOST}:${PORT}/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`)
		.then((loadedPosts) =>
			Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]),
		)
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts && loadedPosts.map(transformPost),
			links,
		}));
