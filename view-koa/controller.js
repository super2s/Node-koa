async (ctx, next) => {
    ctx.render('index.html',{
        title: 'welcome'
    });
}

async (ctx, next) => {
    var 
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    if (email === "1031488054@qq.com" && password === 'chuo10314') {
        //��¼�ɹ���
        ctx.render('signin-ok.html', {
            title: '��贳ɹ�',
            name: 'mr yu'
        });
    } else {
        //��¼ʧ��
        ctx.render('signin-failed.html', {
            title: '��¼ʧ��'
        });
    }
}
