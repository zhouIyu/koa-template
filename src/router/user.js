const Router = require('@koa/router');
const router = new Router();
const User = require('../controller/user');

router.prefix('/user');

router.get('/mine', User.mine);
router.post('/create', User.createUser);
router.post('/login', User.login);

module.exports = router;
