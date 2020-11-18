const Router = require('@koa/router');
const router = new Router();

router.prefix('/user');

router.get('/', async (ctx) => {
	ctx.toJSON({ code: 0});
});
