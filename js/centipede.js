$( document ).ready(function() {

    (function($){
        $.fn.centipede = function(options){
            var settings = $.extend({
                target : this.selector,
                navigation: true,
                navigationText: ["back","forward"],
                hover: true,
                mrg : 5,
            }, options );

            console.log(settings.navigationText);

            var centipede = {
                target: settings.target,
                active_class : "active",
                hover: settings.hover,
                navigation: settings.navigation,
                navigationText: settings.navigationText,
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

    console.log(centipede.mrg);

    if(gal_img_right_margin >= 0){
        var gal_add_margin = gal_img_right_margin/(centipede.count - 1);
        gal_small_img_w = (gal_thumb_row_w / centipede.count) - gal_img_right_margin;

        $(centipede.target + centipede.blank + '.item').css({
            'width' : gal_small_img_w,
            'height' : gal_small_img_w
        });
        $(centipede.target + centipede.blank + '.item').not(':last').css({
            'margin-right' : gal_img_right_margin + gal_add_margin
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

    console.log(centipede.navigation);
    if(centipede.navigation){
        $(centipede.target + centipede.blank + '.enlarged_item').append('<div class="centipede_nav">' +
            '<div class="centipede_prev">' + centipede.navigationText[0] + '</div><div class="centipede_next">' + centipede.navigationText[1] + '</div>' +
            '</div>');
    }
}