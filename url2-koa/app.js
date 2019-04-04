'use strict';
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next();
});

router.get('/hello/:name', async (ctx,next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello, ${name}! </h1>`;
});
router.get('/', async (ctx,next) => {
    ctx.response.body = `<h1>index</h1>
        <form action='/signin' method='post'>
            <p>name:<input name='name' value='koa'/></p>
            <p>password: <input name='password' type='password'/></p>
            <p><input type='submimt' value='submit' /></p>
        </form>`;
});
router.post('/signin', async (ctx, next) {
    var 
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}</h1>`;
    } else {
        ctx.response.body = `<h1>lµ«¬º ß∞‹</h1>`;
        <p><a href='/'>‘Ÿ ‘“ª¥Œ</a></p>
    }
}) £ª
app.use(bodyParser());
app.use(router.routes());
app.listen(300);
console.log('app')