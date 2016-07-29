$( document ).ready(function() {

    (function($){
        $.fn.centipede = function(options){
            var settings = $.extend({
                target : this.selector,
                navigation: true,
                navigation_text: ["back","forward"],
                caption: false,
                fade_effect: false,
                hover: true,
                mrg : 5
            }, options );

            console.log(options);

            var centipede = {
                target: settings.target,
                active_class : "active",
                hover: settings.hover,
                navigation: settings.navigation,
                navigation_text: settings.navigation_text,
                caption: settings.caption,
                fade_effect: settings.fade_effect,
                mrg: settings.mrg,
                count : $(settings.target + ' .thumbnails').find('.item').length, //settings.target + ' .thumbnails',
                dot : '.',
                blank : ' '
            };

            set_css(centipede);
            change_image(centipede);
            set_navigation(centipede);

            return this;
        };
    }(jQuery));
});


// set image dimensions
function set_css(centipede){
    // set width and height of small images
    var gal_thumb_row_w = $(centipede.target).width();
    var img_right_margin = centipede.mrg;

    if(img_right_margin >= 0){
        console.log('gal width ', gal_thumb_row_w);
        var ul_w = $(centipede.target + ' .thumbnails').width();

        var mrg = img_right_margin * (centipede.count - 1);
        var img_w = (ul_w - mrg)/centipede.count;

        $(centipede.target + centipede.blank + '.thumbnails .item').css({
            'width' : img_w,
            'height' : img_w,
            'margin-right' : img_right_margin
        });

        console.log('img_right_margin ', img_right_margin);
        $(centipede.target + centipede.blank + '.thumbnails .item:last-child').css({
            'margin-right' : 0
        });
    }

}

// swap images after click
function change_image(centipede){
    var active_item_src;
    var active_item_alt;
    var set_caption;

    $(centipede.target + centipede.blank + '.item:first').addClass(centipede.active_class);

    active_item_src = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('img').attr('src');
    active_item_alt = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('img').attr('alt');

    $(centipede.target).prepend('<div class="enlarged_item"><img src="' + active_item_src + '" alt="' + active_item_alt +'"></div>');


    // set opacity
    if(centipede.hover){
        $(centipede.target + centipede.blank + '.enlarged_item').find('img').addClass('img_opacity');
        $(centipede.target + centipede.blank + '.item').find('img').addClass('img_opacity');
    }

    // set caption
    if(centipede.caption){
        $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
        set_caption = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('.c_caption').text();
        $(centipede.target + centipede.blank + '.enlarged_item').find('.show_caption').text(set_caption);
    }else{
        $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
    }

    $(centipede.target + centipede.blank + '.item').on('click', function(){

        if(!$(this).hasClass(centipede.active_class)){
            $(this).siblings().removeClass(centipede.active_class);
            $(this).addClass(centipede.active_class);

            active_item_src = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('img').attr('src');
            active_item_alt = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('img').attr('alt');

            if(centipede.fade_effect){
                console.log(centipede.fade_effect);
                $(this).closest('.thumbnails').siblings('.enlarged_item').find('img').fadeOut(400, function() {
                    $(this).attr({
                        'src': active_item_src,
                        'alt': active_item_alt
                    });
                }).fadeIn(400);
                $(this).addClass(centipede.active_class);
            }else{
                $(this).closest('.thumbnails').siblings('.enlarged_item').find('img').attr({
                    'src': active_item_src,
                    'alt': active_item_alt
                });
                $(this).addClass(centipede.active_class);
            }

            if(centipede.caption){
                set_caption = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('.c_caption').text();
                $(this).closest('.thumbnails').siblings('.enlarged_item').find('.show_caption').text(set_caption);
            }else{
                $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
            }


        }

        return false;
    });

}
// set navigation
function set_navigation(centipede){

    if(centipede.navigation){
        $(centipede.target + centipede.blank + '.enlarged_item').append('<div class="c_nav">' +
            '<div class="c_prev">' + centipede.navigation_text[0] + '</div><div class="c_next">' + centipede.navigation_text[1] + '</div>' +
        '</div>');

        $(centipede.target + centipede.blank + '.enlarged_item .c_prev').on('click', function(){

            var index = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item.active').index();
            if(index > 0){
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').removeClass('active');
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index - 1).addClass('active');
                var set_src = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index - 1).find('img').attr('src');
                $(this).closest('.enlarged_item').find('img').attr('src', set_src);

                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index).find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }else{
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                }
            }
            if(index == 0){
                index = centipede.count - 2;
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').removeClass('active');
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item:last').addClass('active');
                var set_src = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item:last').find('img').attr('src');
                $(this).closest('.enlarged_item').find('img').attr('src', set_src);

                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item:last').find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }else{
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                }
            }
        });
        $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .c_next').on('click', function(){

            var index = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item.active').index();

            if(index == 0){
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').removeClass('active');
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).addClass('active');
                var set_src = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).find('img').attr('src');
                $(this).closest('.enlarged_item').find('img').attr('src', set_src);

                // Set caption text
                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }else{
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                }
            }
            if(index < centipede.count - 1 && index != 0){
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').removeClass('active');
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).addClass('active');
                var set_src = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).find('img').attr('src');
                $(this).closest('.enlarged_item').find('img').attr('src', set_src);

                // Set caption text
                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }else{
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                }
            }
            if(index == centipede.count - 1 && index != 0){
                index = 0;
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').removeClass('active');
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item:first').addClass('active');
                var set_src = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index).find('img').attr('src');
                $(this).closest('.enlarged_item').find('img').attr('src', set_src);

                // Set caption text
                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item:first').eq(index).find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }else{
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                }
            }
        });

    }

}
