module.exports = {
    'POT /signin': async (ctx, next) => {
        var 
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if (email === '1031488054@qq.com' && password === 'chuo10314') {
            console.log('��¼�ɹ�');
            ctx.render('signin-ok.html', {
                title: '��¼�ɹ�',
                name: 'super yu'
            });
        } else {
            console.log('��¼ʧ��');
            ctx.render('signin-failed.html', {
                title: '��¼ʧ��'
            });
        }
    }
};