/**
 * log4js的koa2中间件
 * 1- 首先要明白这个中间件的作用是什么 - 为了把log4js挂载到ctx上 以至于其他地方可以方便使用
 * 2- 中间件 - 实际上就是一个函数 该函数返回值也是一个函数 不过这个函数的入参有ctx和next这样koa传进来的特殊参数
 */

const log4js = require('log4js');
const log4jsConfig = require('../../config/logConf');

module.exports = () => {
  // 初始化log4js
  // 日志系统--读取配置文件--这个其实也可以由外部传入 这里就写入到中间件内部就可以了
  log4js.configure(log4jsConfig);
  // 三大日志种类: 访问日志 应用日志 错误日志
  const logAccess = log4js.getLogger('access');
  const logApp = log4js.getLogger('app');
  const logError = log4js.getLogger('error');

  // 返回一个函数
  return async (ctx, next) => {
    // 把几个日志对象挂载到ctx
    ctx.logAccess = logAccess;
    ctx.logApp = logApp;
    ctx.logError = logError;
    // 执行下一个中间件
    await next();
  };
};
