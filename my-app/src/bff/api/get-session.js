import { HOST, PORT } from '../../constants';
import { transformSession } from '../transformers';

export const getSession = async (hash) =>
	fetch(`${HOST}:${PORT}/sessions?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession && transformSession(loadedSession));
