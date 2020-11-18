const Koa = require('koa');
const config = require('config');
const cors = require('@koa/cors');
const body = require('koa-body');
const errorHandle = require('./middlewares/errorHandle');
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
    }

    init () {
        this.preMiddlewre();
        loadRoutes(this.app);
    }

    start () {
        this.init();
        const port = config.get('port');
        app.listen(port, () => {
            console.log(`runing in http://localhost:${port}`);
        });
    }
}
const app = new App(new Koa());
app.start();
