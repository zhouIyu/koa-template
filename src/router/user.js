const Router = require('@koa/router');
const router = new Router();
const User = require('../controller/user');
const validator = require('../middlewares/validator');
const { create, login } = require('../schema/user');

router.prefix('/user');

router.get('/mine', User.mine);
router.post('/create', validator(create), User.createUser);
router.post('/login', validator(login), User.login);

module.exports = router;
