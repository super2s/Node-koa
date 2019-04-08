const nunjucks = require('nunjucks');
function createEnv(path, opts) {
    var 
        //控制输出是否被转义。
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        //不使用缓存，每次都重新编译。
        noCache = opts.noCache || false,
        //当模板变化时重新加载。
        watch = opts.watch || false,
        //当输出为null或undefined抛出异常。
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path || 'views', {
                watch: watch,//当模板变化系统弄自动更新
                noCache: noCache
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            }
        );
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f,opts.filters[f]);
        }
    }
    return env;
}

function templating(path,opts) {
    var env = createEnv(path,opts);
    return async (ctx, next) => {
        //给CTX绑定render函数
        ctx.render = function (view, model) {
            //吧render后的内容赋值
            ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
            //设置内容类型
            ctx.response.type = 'text/html';
        };
        //继续处理请求
        await next();
    };
};
module.exports = templating;