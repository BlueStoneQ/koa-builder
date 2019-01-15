const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const log4js = require('log4js');
const log4js_config = require('./config/logConf');
const router = require('./router');

const app = new Koa();
// 日志系统--读取配置文件
log4js.configure(log4js_config);
// PORT 端口号 -- 后面放到配置文件
const PORT = 3000;

// 静态资源
app.use(static(path.join(__dirname, 'public')));

/**
* 配置服务端模板渲染引擎中间件 -- 一定要在任何路由之前使用
* (注意很多中间件都要在路由之前使用 不然在路由到某个业务时 该中间件还未加载)
*/
app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}));

/**
 * 处理post请求中的body
 */
app.use(bodyParser({
  formLimit: '1mb'
}));

/**
 * 使响应为json格式
 * 1- 省去每次对Content-Type的设置
 */
app.use(json());

/**
 * START log系统 测试 ---------------------------------
 */
const logAccess = log4js.getLogger('access');
const logApp = log4js.getLogger('app');
const logError = log4js.getLogger('error');

console.log('开始写日志')
logAccess.trace('This is my logFile---logAccess');
logAccess.debug('Let\'s go');
logAccess.info('date log');
logAccess.warn('hahhhahah');
logAccess.error('火星救援');

logApp.trace('This is my logFile---logApp');
logApp.debug('Let\'s go');
logApp.info('date log');
logApp.warn('hahhhahah');
logApp.error('火星救援');

logError.trace('This is my logFile---error');
logError.debug('Let\'s go');
logError.info('date log');
logError.warn('hahhhahah');
logError.error('火星救援');
/**
 * END log系统 测试 ---------------------------------
 */

// 路由
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT);
console.log(`Listening on port http://127.0.0.1:${PORT}`);
