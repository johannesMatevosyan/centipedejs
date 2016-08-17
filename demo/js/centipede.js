$( document ).ready(function() {

    (function($){
        $.fn.centipedejs = function(options){
            var settings = $.extend({
                target : this.selector,
                navigation: true,
                navigation_text: ["back","forward"],
                caption: false,
                fade_effect: false,
                hover: true,
                mrg : 5
            }, options );

            var centipedejs = {
                target: settings.target,
                active_class : "active",
                c_large : "c_large_item",
                c_thumbnails : "c_thumbnails",
                c_item : "c_item",
                c_s_caption: "show_caption",
                hover: settings.hover,
                navigation: settings.navigation,
                navigation_text: settings.navigation_text,
                caption: settings.caption,
                fade_effect: settings.fade_effect,
                mrg: settings.mrg,
                count : $(settings.target + ' .c_thumbnails').find('.c_item').length,
                dot : '.',
                blank : ' '
            };

            set_css(centipedejs);
            change_image(centipedejs);
            set_navigation(centipedejs);

            return this;
        };
    }(jQuery));

});


// set image dimensions
function set_css(centipedejs){

    // set width and height of small images
    /*
    var small_img_w;
    var img_right_margin = (centipedejs.mrg/$(centipedejs.target).width()) * 100;

    if(img_right_margin >= 0){

        small_img_w = (100 / centipedejs.count) - img_right_margin;
        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({
            'width' : small_img_w + '%',
            'margin-right' : img_right_margin + '%'
        });

        var total_margins = img_right_margin * (centipedejs.count - 1);

        // add left margin to remove browser errors and spread 'li' tags equally within whole with
        var width = ( 100 * parseFloat($(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css('width')) /
        parseFloat($(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails).parent().css('width')) );

        var whole_width = width * centipedejs.count + total_margins;
        var reminder = 100 - whole_width;
        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item + ':first-child').css({
            'margin-left' : reminder/2.5 + '%'
         });
        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item + ':last-child').css({
            'margin-right' : 0
        });

        if($(window).width() <= '500'){
            $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({'display': 'none'});
        }
        $(window).resize(function(){
            if($(window).width() <= '500'){
                $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({'display': 'none'});
            }else{
                $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({'display': 'inherit'});
            }
        });
    }
    */
    // set width and height of small images

    function roundDown(number, decimals) {
        decimals = decimals || 0;
        return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
    }

    var img_right_margin = centipedejs.mrg;

    if(img_right_margin >= 0){

        var ul_w = $(centipedejs.target).width();
        var ul_w2 = $('.c_thumbnails')[0].getBoundingClientRect().width;
        console.log('ul_w2 ', ul_w2);
        var mrg = img_right_margin * (centipedejs.count - 1);

        if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
            // Do something in Firefox
            var img_w = roundDown((ul_w2 - mrg)/centipedejs.count, 1);
            console.log('Firefox ');
        }else{
            console.log('Chrome 3');
            var img_w = roundDown((ul_w2 - mrg)/centipedejs.count, 3);
        }

        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({
            'width' : img_w,
            'margin-right' : img_right_margin
        });

        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item + ':last-child').css({
            'margin-right' : 0
        });

        // hide thumbnails in responsive layout
        if($(window).width() <= '500'){
            $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({'display': 'none'});
        }


        $(window).resize(function(){

            console.log('resize ');
            var ul_w = $(centipedejs.target).width();
            var ul_w2 = $('.c_thumbnails')[0].getBoundingClientRect().width;
            console.log('ul_w2 ', ul_w2);
            var mrg = img_right_margin * (centipedejs.count - 1);

            if( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ){
                // Do something in Firefox
                var img_w = roundDown((ul_w2 - mrg)/centipedejs.count, 1);
                console.log('Firefox ');
            }else{
                console.log('Chrome 3');
                var img_w = roundDown((ul_w2 - mrg)/centipedejs.count, 3);
            }

            $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({
                'width' : img_w,
                'margin-right' : img_right_margin
            });

            $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item + ':last-child').css({
                'margin-right' : 0
            });

            // hide thumbnails in responsive layout
            if($(window).width() <= '500'){
                $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({'display': 'none'});
            }else{
                $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_thumbnails + centipedejs.blank + centipedejs.dot + centipedejs.c_item).css({'display': 'inherit'});
            }
        });
    }
}

// swap images after click
function change_image(centipedejs){

    var active_item_src;
    var active_item_alt;
    var set_caption;

    $(centipedejs.target + centipedejs.blank + '.c_item:first').addClass(centipedejs.active_class);

    active_item_src = $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item + centipedejs.dot + centipedejs.active_class).find('img').attr('src');
    active_item_alt = $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item + centipedejs.dot + centipedejs.active_class).find('img').attr('alt');

    $(centipedejs.target).prepend('<div class="' + centipedejs.c_large + '"><img src="' + active_item_src + '" alt="' + active_item_alt +'"></div>');


    // set opacity
    if(centipedejs.hover){
        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large).find('img').addClass('img_opacity');
        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item).find('img').addClass('img_opacity');
    }

    // set caption
    if(centipedejs.caption){
        $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large).append('<div class="' + centipedejs.c_s_caption + '"></div>');
        set_caption = $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item + centipedejs.dot + centipedejs.active_class).find('.c_caption').text();
        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large).find(centipedejs.dot + centipedejs.c_s_caption).text(set_caption);
    }else{
        $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
    }

    $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item).on('click', function(){

        if(!$(this).hasClass(centipedejs.active_class)){
            $(this).siblings().removeClass(centipedejs.active_class);
            $(this).addClass(centipedejs.active_class);

            active_item_src = $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item + centipedejs.dot + centipedejs.active_class).find('img').attr('src');
            active_item_alt = $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item + centipedejs.dot + centipedejs.active_class).find('img').attr('alt');

            if(centipedejs.fade_effect){
                $(this).closest(centipedejs.dot + centipedejs.c_thumbnails).siblings(centipedejs.dot + centipedejs.c_large).find('img').fadeOut(400, function() {
                    $(this).attr({
                        'src': active_item_src,
                        'alt': active_item_alt
                    });
                }).fadeIn(400);
                $(this).addClass(centipedejs.active_class);
            }else{
                $(this).closest(centipedejs.dot + centipedejs.c_thumbnails).siblings(centipedejs.dot + centipedejs.c_large).find('img').attr({
                    'src': active_item_src,
                    'alt': active_item_alt
                });
                $(this).addClass(centipedejs.active_class);
            }

            if(centipedejs.caption){
                set_caption = $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_item + centipedejs.dot + centipedejs.active_class).find('.c_caption').text();
                $(this).closest(centipedejs.dot + centipedejs.c_thumbnails).siblings(centipedejs.dot + centipedejs.c_large).find(centipedejs.dot + centipedejs.c_s_caption).text(set_caption);
            }else{
                $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
            }


        }

        return false;
    });

}

function set_caption_text(centipedejs, caption_text){

    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large).append('<div class="' + centipedejs.c_s_caption + '"></div>');
    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large).find(centipedejs.dot + centipedejs.c_s_caption).text(caption_text);

}

// set navigation
function set_navigation(centipedejs){

    if(centipedejs.navigation){
        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large).append('<div class="c_nav">' +
            '<div class="c_prev">' + centipedejs.navigation_text[0] + '</div><div class="c_next">' + centipedejs.navigation_text[1] + '</div>' +
        '</div>');

        $(centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + '.c_prev').on('click', function(){

            var index = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find('.c_item.active').index();
            if(index == 0){

                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).removeClass('active');
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index-1).addClass('active');
                var set_src = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find('.c_item:last').find('img').attr('src');
                $(this).closest(centipedejs.dot + centipedejs.c_large).find('img').attr('src', set_src);

                // Set caption text
                if(centipedejs.caption){
                    var caption_text = $(this).closest(centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index-1).find('.c_caption').text();
                    set_caption_text(centipedejs, caption_text);
                }else{
                    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
                }

            }
            if(index <= centipedejs.count - 1 && index != 0){

                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).removeClass('active');
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index - 1).addClass('active');
                var set_src = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index - 1).find('img').attr('src');
                $(this).closest(centipedejs.dot + centipedejs.c_large).find('img').attr('src', set_src);

                if(centipedejs.caption){
                    var caption_text = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index - 1).find('.c_caption').text();
                    set_caption_text(centipedejs, caption_text);
                }else{
                    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
                }
            }

        });

        $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + '.c_next').on('click', function(){

            var index = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find('.c_item.active').index();
            if(index == 0){
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).removeClass('active');
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index + 1).addClass('active');
                var set_src = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index + 1).find('img').attr('src');
                $(this).closest(centipedejs.dot + centipedejs.c_large).find('img').attr('src', set_src);

                // Set caption text
                if(centipedejs.caption){
                    var caption_text = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index + 1).find('.c_caption').text();
                    set_caption_text(centipedejs, caption_text);
                }else{
                    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
                }
            }
            if(index < centipedejs.count - 1 && index != 0){
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).removeClass('active');
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index + 1).addClass('active');
                var set_src = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index + 1).find('img').attr('src');
                $(this).closest(centipedejs.dot + centipedejs.c_large).find('img').attr('src', set_src);

                // Set caption text
                if(centipedejs.caption){
                    var caption_text = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index + 1).find('.c_caption').text();
                    set_caption_text(centipedejs, caption_text);
                }else{
                    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
                }
            }
            if(index == centipedejs.count - 1 && index != 0){
                index = 0;
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).removeClass('active');
                $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find('.c_item:first').addClass('active');
                var set_src = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find(centipedejs.blank + centipedejs.dot + centipedejs.c_item).eq(index).find('img').attr('src');
                $(this).closest(centipedejs.dot + centipedejs.c_large).find('img').attr('src', set_src);

                // Set caption text
                if(centipedejs.caption){
                    var caption_text = $(this).closest(centipedejs.dot + centipedejs.c_large).siblings(centipedejs.dot + centipedejs.c_thumbnails).find('.c_item:first').eq(index).find('.c_caption').text();
                    set_caption_text(centipedejs, caption_text);
                }else{
                    $(centipedejs.blank + centipedejs.target + centipedejs.blank + centipedejs.dot + centipedejs.c_large + centipedejs.blank + centipedejs.dot + centipedejs.c_s_caption).remove();
                }
            }
        });

    }

}

