var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>name: <input name="name" value="koa"></p>
            <p>password: <input name="password" type="password"></p>
            <p><input type="submit" value="submit"></p>
        </form>`;
};

var fn_signin = async (ctx, next) => {
    var 
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`��½Ϊ name:${name}, password:${password}`);
    if (name ==='koa' && password === '12345') {
        ctx.response.body = `<h1>welconme,${name}</h1`;
    } else {
        ctx.response.body = `<h1>��¼ʧ��</h1>
        <p><a href="/">����һ��</a></p>`;
    }
};
module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};