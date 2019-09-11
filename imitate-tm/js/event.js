
    //顶部鼠标悬停弹出事件
    $(function () {
        $('li.top-item').mouseenter(function () {
            var id = $(this).attr('id');
            showTopitem(id);
        })

        $('li.top-item').mouseleave(function () {
            var id = $(this).attr('id');
            hideTopitem(id);
        });


    });


    //首页商品分类鼠标悬停弹出表格事件
    $(function (){
        $('li.inline-item').mouseenter(function () {
            var id = $(this).attr('id');
            showThrow(id);
        });

        $('li.inline-item').mouseleave(function () {
            var id = $(this).attr('id');
            hideThrow(id);
        });

        $('div.throw').mouseenter(function () {
            var id = $(this).attr('data-id');
            showThrow(id);
        });

        $('div.throw').mouseleave(function () {
            var id = $(this).attr('data-id');
            hideThrow(id);
        });
    });

    //首页天猫超市自动切换量贩装/今日疯抢事件
    $(function (){
        startToggleTab();
        $('#oil').mouseenter(function () {showHover()});
        $('#oil').mouseleave(function () {startToggleTab()});
        $('#laundry').mouseenter(function (){hideHover()});
        $('#laundry').mouseleave(function (){startToggleTab()});
    }); 
    
    //产品列表更多选项按钮事件
    $(function () {
        $('.checkbox p').click(function () {
            togglecheckbox();
        });
    });

    //产品列表更多品牌选项事件
    $(function () {
        $(".top-screening .more").click(function () {
            $('.brand-show').toggle();
            $('.brand-hide').toggle();
        })
    });

    //产品列表事件
    $(function () {
        $('.fSort').hover(function(){
            $(this).css({'background-color':'#ececec'});
        }, function (){
            $(this).css({'background-color':'#fff'});
        });
    })

    //产品列表事件
    $(function () {
        $('.price-floor').change(function () {
            filterPrice();
        })
    })

    //产品列表筛选价格事件
    $(function () {
        $('.price-ceil').change(function () {
            filterPrice();
        })
    })

    //产品详情页小图放大
    $(function () {
        $('.sm-img').mouseenter(function () {
            var addr = $(this).attr('bigImage');
            seebigimg(addr);
        });
    });

    //产品详情页商品详情/评论/售后服务
    $(function (){
        $('.box').click(function () {
            var id = $(this).attr('id');
            toggleDetails(id);
        })
    })
