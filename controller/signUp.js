/**
 * signup相关的路由处理
 */
exports.signup = async ctx => {
  ctx.body = 'signup';
}

exports.signupView = async ctx => {
  await ctx.render('head', {
    title: 'ejs模板'
  })
}