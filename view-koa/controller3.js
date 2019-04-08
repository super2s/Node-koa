const fs = require('fs');

function addMapping(router,mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`ע��URLӳ�䣺 GET ${path}`);
        } else if (url.startsWith(`POST`)) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.group(`ע��URLӳ�䣺 POST ${path}`);
        } else if (url.startsWith('PUT')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`ע��URLӳ��: ${path}`);
        } else if (url.startsWith('DELETE')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`ע��URLӳ�䣺 DELETE ${path}`);
        } else {
            console.log(`��Ч��RUL��${url}`);
        }
    }
}

function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`���̿�����: ${f}...`);
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers',
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};
