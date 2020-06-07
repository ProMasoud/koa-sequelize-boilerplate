import Boom from '@hapi/boom';
import { createJwtToken } from '../utils/auth';

exports.login = async data => {
	if (!data.email || !data.password) {
		throw Boom.badRequest('Credentials needed');
	}

	const jwt = await createJwtToken(user);
	return {
		token: jwt,
	};
};

