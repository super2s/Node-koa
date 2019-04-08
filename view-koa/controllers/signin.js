module.exports = {
    'POT /signin': async (ctx, next) => {
        var 
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if (email === '1031488054@qq.com' && password === 'chuo10314') {
            console.log('µÇÂ¼³É¹¦');
            ctx.render('signin-ok.html', {
                title: 'µÇÂ¼³É¹¦',
                name: 'super yu'
            });
        } else {
            console.log('µÇÂ¼Ê§°Ü');
            ctx.render('signin-failed.html', {
                title: 'µÇÂ¼Ê§°Ü'
            });
        }
    }
};