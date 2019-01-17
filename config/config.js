/**
 * 配置文件
 * 1- 生产环境和开发环境2套配置
 * 2- mysql 和 redis配置
 * 3- 其他配置
 */

 // 生产环境配置
 const production = {
  // 服务器端口
  SERVER_PORT: 3000
  // DB-REDIS配置
  // DB-MYSQL数据库配置
 }

 // 开发环境配置
 const development = {
  // 服务器端口
  SERVER_PORT: 3000
  // DB-REDIS配置
  // DB-MYSQL数据库配置
 }

 const config = process.env.NODE_ENV !== "development" ? production : development

 module.exports = config