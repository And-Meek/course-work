import { createSession } from './create-session';
import { getUser, addUser } from './utils';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = getUser(authLogin);

		const session = {
			error: null,
			res: createSession(user.role_id),
		};

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (user.password !== authPassword) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: session,
		};
	},

	async register(regLogin, regPassword) {
		const user = getUser(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		const session = {
			error: null,
			res: createSession(user.role_id),
		};

		return {
			error: null,
			res: session,
		};
	},
};
