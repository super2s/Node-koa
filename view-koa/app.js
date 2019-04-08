'use strict';
const Koa = require('koa');

const bodyParser =require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating')

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

let staticFiles = require('./static-files');
app.use(staticFiles('/static',__dirname + '/static'));

//URL������־
app.use(async (ctx, next) =>{
    console.log(`process ${ctx.request.method} ${ctx.request.url} ...`);
    var 
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start,
    ctx.response.set('x-response-time',`${execTime}ms`);
});

//��̬�ļ�����
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static', __dirname + '/static'));
}

//��������
app.use(bodyParser());

//���nunjucksΪ��ͼ
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

//���·����
app.use(controller());

app.listen(3000);
console.log('�ڶ˿�3000������')
