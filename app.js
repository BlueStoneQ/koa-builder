const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const router = require('./router');

const app = new Koa();
// PORT 端口号 -- 后面放到配置文件
const PORT = 3000;

// 静态资源
app.use(static(path.join(__dirname, 'public')));

// 路由
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT);
console.log(`Listening on port http://127.0.0.1:${PORT}`);
