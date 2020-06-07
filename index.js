import "core-js/stable";
import "regenerator-runtime/runtime";
import koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import Boom from '@hapi/boom';
import jwt from 'koa-jwt';

import { serverPort } from './config/config';
import loadRoutes from './routes';
// import db from './models';

// app
const app = new koa();

// routes
const router = new Router();

loadRoutes(router);

if (process.env.NODE_ENV === 'development') {
	const corsOptions = {
		credentials: true,
		origin: '*',
	};
	app.use(cors(corsOptions));
}

app
	.use(bodyParser())
	.use(
		jwt({
			secret: process.env.JWT_KEY,
		}).unless({
			path: ['/', '/login'],
		}),
	)
	.use(router.routes())
	.use(
		router.allowedMethods({
			throw: true,
			notImplemented: () => new Boom.notImplemented(),
			methodNotAllowed: () => new Boom.methodNotAllowed(),
		}),
	)
	.use(async context => {
		context.body = 'INSIDE API';
	});

// server
const server = app.listen(serverPort, () => {
	// db.sequelize.sync();
	console.log(`Server started on port ${serverPort}`);
});

module.exports = server;
