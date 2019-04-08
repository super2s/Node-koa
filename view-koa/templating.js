const nunjucks = require('nunjucks');
function createEnv(path, opts) {
    var 
        //��������Ƿ�ת�塣
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        //��ʹ�û��棬ÿ�ζ����±��롣
        noCache = opts.noCache || false,
        //��ģ��仯ʱ���¼��ء�
        watch = opts.watch || false,
        //�����Ϊnull��undefined�׳��쳣��
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader(path || 'views', {
                watch: watch,//��ģ��仯ϵͳŪ�Զ�����
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
        //��CTX��render����
        ctx.render = function (view, model) {
            //��render������ݸ�ֵ
            ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
            //������������
            ctx.response.type = 'text/html';
        };
        //������������
        await next();
    };
};
module.exports = templating;