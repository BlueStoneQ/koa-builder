const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Nodejs-koa Router 开始分离';
  // ctx.router available
});

module.exports = router;
