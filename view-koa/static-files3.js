const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');
function staticFiles(url, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        //�ж��Ƿ���ָ��url��ͷ
        if (rpath.startsWith(url)) {
            //��ȡ�ļ����·����
            let fp = path.join(dir, rpath.substring(url.length));
            //�ж��ļ��Ƿ����
            if (await fs.exists(fp)) {
                //�����ļ���mime
                ctx.response.type = mime.lookup(rpath);
                //��ȡ�ļ����ݲ�����
                ctx.response.body = await fs.readFile(fp);
            } else {
                //�ļ�������
                ctx.response.status = 404;
            }
        } else {
            //����ָ��ǰ׺��url����������һ���м��.
            await next();
        }
    };
};
module.exports = staticFiles;