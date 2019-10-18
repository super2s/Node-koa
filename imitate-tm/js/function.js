    var toggletabhide, toggletabshow;

    function showTopitem(id) {
        $('[data-id=' + id + ']').show();
    }

    function hideTopitem(id) {
        $('[data-id=' + id + ']').hide();
    }

    function showThrow(id) {
        $('[id=' + id + ']').css('background-color', '#fff');
        $('[id=' + id + '] a').css('color', '#FF0036');
        $('[data-id=' + id + ']').show();
    }

    function hideThrow(id) {
        $('[id=' + id + ']').css('background-color', '#696969');
        $('[id=' + id + '] a').css('color', '#fff');
        $('[data-id=' + id + ']').hide();
    }

    function tabshow() {
        $('#show').toggle();
        $('#oil').toggleClass('highlight');
    };

    function tabhide() {
        $('#hide').toggle();
        $('#laundry').toggleClass('highlight');
    };

    function startToggleTab() {
        if (toggletabhide != null) {
            clearInterval(toggletabhide);
            toggletabhide = null;
        } else if (toggletabshow != null) {
            clearInterval(toggletabshow);
            toggletabshow = null;
        }
        toggletabhide = setInterval(tabhide, 3000);
        toggletabshow = setInterval(tabshow, 3000);
    }

    function stopToggleTab() {
        clearInterval(toggletabhide);
        toggletabhide = null;
        clearInterval(toggletabshow);
        toggletabshow = null;
    }

    function showHover() {
        stopToggleTab();
        if ($('#show').css('display') == 'none') {
            tabshow();
            tabhide();
        };
    };

    function hideHover() {
        stopToggleTab();
        if ($('#hide').css('display') == 'none') {
            tabhide();
            tabshow();
        };
    }

    function togglecheckbox() {
        if ($('.checkbox p').text() == '更多') {
            $('.checkbox .checkbox-hide').show();
            $('.checkbox p').text('收起');
        } else {
            $('.checkbox .checkbox-hide').hide();
            $('.checkbox p').text('更多');
        }
    }

    function filterPrice() {
        var floor = $('.price-floor').val();
        var ceil = $('.price-ceil').val();
        if (!isNaN(floor)) {
            $('.price').each(function () {
                let price = $(this).attr('title');
                if (price >= floor) {
                    $(this).parent().show();
                } else {
                    $(this).parent().hide();
                };
            });
        }

        if (!isNaN(ceil) && !(ceil == '')) {
            $('.price').each(function () {
                let price = $(this).attr('title');
                if (price <= ceil) {
                    $(this).parent().show();
                } else {
                    $(this).parent().hide();
                };
            });
        }

        if (floor < ceil) {
            if (!isNaN(floor) && !isNaN(ceil) && !(ceil == '')) {
                $('.price').each(function () {
                    let price = $(this).attr('title');
                    if (price >= floor && price <= ceil) {
                        $(this).parent().show();
                    } else {
                        $(this).parent().hide();
                    };
                });
            }
        }

        if (ceil < floor) {
            if (!isNaN(floor) && !isNaN(ceil) && !(ceil == '')) {
                $('.price').each(function () {
                    let price = $(this).attr('title');
                    if (price <= floor && price >= ceil) {
                        $(this).parent().show();
                    } else {
                        $(this).parent().hide();
                    };
                });
            };
        }
    };

    function seebigimg(addr) {
        $('#bigimg').attr('src', addr);
        $('.sm-img').each(function () {
            let bigImage = $('#bigimg').attr('src');
            if ($(this).attr('bigImage') == bigImage) {
                $(this).css('border', '#000 1px solid')
            } else {
                $(this).css('border', '');
            }
        });
    }

    function toggleDetails(id) {
        if (id == 'commodity') {
            $('div[data-id=' + id + ']').show();
            $('div[data-id=' + id + ']').siblings().show();
        } else {
            $('div[data-id=' + id + ']').show();
            $('div[data-id=' + id + ']').siblings().hide();
        }
        $('#' + id).addClass('red-bd');
        $('#' + id).siblings().removeClass('red-bd');
    }