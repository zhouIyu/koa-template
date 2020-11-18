const UserModel = require('../model/user');
const { resConfig } = require('../utils/response');

class UserController {
    static async createUser (ctx) {
        const body = ctx.request.body;
        const user = await UserModel.findOne(body);
        if (user) {
            return ctx.error(resConfig.Exist_User, '用户已存在');
        }
        const newUser = new UserModel(body);
        await newUser.save();
        ctx.success({}, '注册成功');
    };

    static async login (ctx) {
        const body = ctx.request.body;
        const user = await UserModel.findOne(body);

        if (!user) {
            return ctx.error({}, '用户名或者密码错误');
        }
        ctx.success(user, '登录成功');
    }

    static async mine (ctx) {
        const user = ctx.user;
        ctx.success(user);
    }

    static handleUserInfo (body) {
        body = body.toJSON();
        delete body.password;
        delete body.valid;
        delete body.__v;
        body.id = body._id;
        delete body._id;
        return body;
    }
}

module.exports = UserController;
