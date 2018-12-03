const Koa = require('koa');
const app = new Koa();

// PORT 端口号 -- 后面放到配置文件中
const PORT = 3000;

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT);
console.log(`Listening on port http://127.0.0.1:${PORT}`);
