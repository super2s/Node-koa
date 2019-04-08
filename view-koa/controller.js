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
        //µÇÂ¼³É¹¦£º
        ctx.render('signin-ok.html', {
            title: '³Ìè´³É¹¦',
            name: 'mr yu'
        });
    } else {
        //µÇÂ¼Ê§°Ü
        ctx.render('signin-failed.html', {
            title: 'µÇÂ¼Ê§°Ü'
        });
    }
}
