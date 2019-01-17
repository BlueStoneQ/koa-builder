/**
 * signup相关的路由处理
 */
const userModel = require('../service/mysql/user')
exports.signup = async ctx => {
  // 可以查询数据 然后在这里打印测试下哈哈
  await userModel.list()
    .then(async (result) => {
      console.log(`从用户表中查到的信息：${JSON.stringify(result)}`);
      ctx.body = `从用户表中查到的信息：${JSON.stringify(result)}`;
    });
}

exports.signupView = async ctx => {
  await ctx.render('head', {
    title: 'ejs模板'
  })
}