let staticFiles = require('./static-files');
app.use(staticFiles('/static',__dirname + '/static'));

app.use(async (ctx, next) =>{
    console.log(`process ${ctx.request.method} ${ctx.request.url} ...`);
    var 
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start,
    ctx.response.set('x-response-time',`${execTime}ms`);
});

if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static', __dirname + '/static'));
}
app.use(bodyParser());
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));
app.use(controller());
const isProduction = process.env.NODE_ENV === 'production';
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));