const Koa = require('koa');
var Router = require('koa-router');
// const router = require('./router');

const router = new Router();
const app = new Koa();

// PORT 端口号 -- 后面放到配置文件中
const PORT = 3000;

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Nodejs-koa Router';
  // ctx.router available
});

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app
  .use(router.routes())
  .use(router.allowedMethods());

// router(app);

app.listen(PORT);
console.log(`Listening on port http://127.0.0.1:${PORT}`);
