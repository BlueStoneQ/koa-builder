/**
 * 汇总各个模块的路由处理函数并暴露出去 提供给Router模块
 */
const signup = require('./signUp');

exports.handle = async ctx => {
  ctx.body = 'Hello 2019 25'
}

exports.signup = signup.signup;