import loginRoute from './auth';

const loadRoutes = router => {
	loginRoute(router);
};

export default loadRoutes;
