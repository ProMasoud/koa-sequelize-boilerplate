import { login } from '../controllers/auth';
import { handleErrors } from '../utils/response';

const authRoute = router => {
	router.get('/login', async ctx => {
		try {
			ctx.body = await login(ctx.request.body);
		} catch (error) {
			const { status, ...body } = handleErrors(error);
			ctx.status = status;
			ctx.body = body;
		}
	});
};

export default authRoute;
