$( document ).ready(function() {

    (function($){
        $.fn.centipede = function(options){
            var settings = $.extend({
                target : this.selector,
                navigation: true,
                navigationText: ["back","forward"],
                caption: false,
                hover: true,
                mrg : 5
            }, options );

            var centipede = {
                target: settings.target,
                active_class : "active",
                hover: settings.hover,
                navigation: settings.navigation,
                navigationText: settings.navigationText,
                caption: settings.caption,
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
    var gal_small_img_w;
    var gal_img_right_margin = centipede.mrg;

    if(gal_img_right_margin >= 0){
        var gal_add_margin = gal_img_right_margin/(centipede.count - 1);
        gal_small_img_w = (gal_thumb_row_w / centipede.count) - gal_img_right_margin;

        $(centipede.target + centipede.blank + '.thumbnails .item').css({
            'width' : gal_small_img_w,
            'height' : gal_small_img_w,
            'margin-right' : gal_img_right_margin + gal_add_margin
        });

        console.log('gal_img_right_margin ', gal_img_right_margin);
        $(centipede.target + centipede.blank + '.thumbnails .item:last-child').css({
            'margin-right' : 0
        });
    }

    // set opacity
    if(centipede.hover){
        $(centipede.target + centipede.blank + '.item').find('img').addClass('img_opacity');
    }

}

// swap images after click
function change_image(centipede){
    var active_item_src;
    var active_item_alt;

    $(centipede.target + centipede.blank + '.item:first').addClass(centipede.active_class);

    active_item_src = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('img').attr('src');
    active_item_alt = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('img').attr('alt');

    $(centipede.target).prepend('<div class="enlarged_item"><img src="' + active_item_src + '" alt="' + active_item_alt +'"></div>');
    $(centipede.target + centipede.blank + '.item').on('click', function(){

        if(!$(this).hasClass(centipede.active_class)){
            $(this).siblings().removeClass(centipede.active_class);
            $(this).addClass(centipede.active_class);

            active_item_src = $(centipede.target + centipede.blank + '.item' + centipede.dot + centipede.active_class).find('img').attr('src');

            $(this).closest('.thumbnails').siblings('.enlarged_item').find('img').fadeOut(400, function() {
                $(this).attr('src', active_item_src);
            }).fadeIn(400);

            $(this).addClass(centipede.active_class);
        }

        return false;
    });

}
// set navigation
function set_navigation(centipede){

    if(centipede.navigation){
        $(centipede.target + centipede.blank + '.enlarged_item').append('<div class="c_nav">' +
            '<div class="c_prev">' + centipede.navigationText[0] + '</div><div class="c_next">' + centipede.navigationText[1] + '</div>' +
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

                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }
            }
            if(index < centipede.count - 1 && index != 0){
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').removeClass('active');
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).addClass('active');
                var set_src = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).find('img').attr('src');
                $(this).closest('.enlarged_item').find('img').attr('src', set_src);

                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index + 1).find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }
            }
            if(index == centipede.count - 1 && index != 0){
                index = 0;
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').removeClass('active');
                $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item:first').addClass('active');
                var set_src = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item').eq(index).find('img').attr('src');
                $(this).closest('.enlarged_item').find('img').attr('src', set_src);

                if(centipede.caption){
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item .show_caption').remove();
                    $(centipede.blank + centipede.target + centipede.blank + '.enlarged_item').append('<div class="show_caption"></div>');
                    var set_caption = $(this).closest('.enlarged_item').siblings('.thumbnails').find('.item:first').eq(index).find('.c_caption').text();
                    $(this).closest('.enlarged_item').find('.show_caption').text(set_caption);
                }
            }
        });

    }

}
