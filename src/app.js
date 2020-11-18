const Koa = require('koa');
const config = require('config');
const cors = require('@koa/cors');
const body = require('koa-body');
const db = require('./utils/db');
const errorHandle = require('./middlewares/errorHandle');
const auth = require('./middlewares/auth');
const loadRoutes = require('./utils/router');

class App {
    constructor (app) {
        this.app = app;
    }

    use (middlewre) {
        this.app.use(middlewre);
    }

    preMiddlewre () {
        this.use(body({}));
        this.use(cors());
        this.use(errorHandle());
        this.use(auth());
    }

    init () {
        db(config.get('db.uri'));
        this.preMiddlewre();
        loadRoutes(this.app);
    }

    start () {
        this.init();
        const port = config.get('port');
        this.app.listen(port, () => {
            console.log(`runing in http://localhost:${port}`);
        });
    }
}
const app = new App(new Koa());
app.start();
