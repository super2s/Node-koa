'use strict';
const Koa = require('koa');

const bodyParser =require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating')

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

let staticFiles = require('./static-files');
app.use(staticFiles('/static',__dirname + '/static'));

//URL请求日志
app.use(async (ctx, next) =>{
    console.log(`process ${ctx.request.method} ${ctx.request.url} ...`);
    var 
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start,
    ctx.response.set('x-response-time',`${execTime}ms`);
});

//静态文件处理
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static', __dirname + '/static'));
}

//解析请求
app.use(bodyParser());

//添加nunjucks为视图
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

//添加路由器
app.use(controller());

app.listen(3000);
console.log('在端口3000中运行')
