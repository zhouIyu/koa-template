const Koa = require('koa');
const config = require('config');
const errorHandle = require('./middlewares/errorHandle');

class App {
    constructor (app) {
        this.app = app;
    }

    use (middlewre) {
        this.app.use(middlewre);
    }

    preMiddlewre () {
        this.use(errorHandle());
    }

    init () {
        this.preMiddlewre();
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
