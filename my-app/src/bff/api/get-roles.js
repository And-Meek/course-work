import { HOST, PORT } from '../../constants';

export const getRoles = () =>
	fetch(`${HOST}:${PORT}/roles`).then((loadedRoles) => loadedRoles.json());
