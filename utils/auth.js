import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';

exports.createJwtToken = user =>
	new Promise((resolve, reject) => {
		if (!user) {
			throw Boom.badRequest('User is Invalid');
		}

		const token = jwt.sign(
			{
				username: user.email,
				id: user.id,
			},
			process.env.JWT_KEY,
		);

		if (token) {
			resolve(token);
		}

		reject('Ops! Token não criado');
	});
