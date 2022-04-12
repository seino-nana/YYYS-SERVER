const koa = require('koa')
const bodyParser = require("koa-bodyparser");

const errorHandler = require('./error.handle')

const useRoutes = require('../router/index')

const app = new koa()
// 返回解析
app.use(bodyParser());

// 解决跨域
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH,OPTIONS"
  );
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});

useRoutes(app)

app.on("error",errorHandler)

module.exports = app