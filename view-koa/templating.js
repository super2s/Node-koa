const nunjucks = require('nunjucks');
const path = require('path');

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
var env = createEnv(path.resolve(__dirname,'views'), {
        watch: true,
        filters: {
            hex: function (n) {
                return '0x' + n.toString(16);
            }
        }
    });
function templating(path,opts) {
    return async (ctx, next) => {
        //��CTX��render����
        ctx.render = function (views, model) {
            //��render������ݸ�ֵ
            ctx.response.body = env.render(views, Object.assign({}, ctx.state || {}, model || {}));
            //������������
            ctx.response.type = 'text/html';
        };
        //������������
        await next();
    };
};
module.exports = templating;