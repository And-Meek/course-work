import { sessions } from './sessions';
import { getUser, addUser } from './utils';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},

	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				session: sessions.create(user),
				id: user.id,
				login: user.login,
				roleId: user.role_id,
			},
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

		return {
			error: null,
			res: {
				session: sessions.create(user),
				id: user.id,
				login: user.login,
				roleId: user.role_id,
			},
		};
	},
};
