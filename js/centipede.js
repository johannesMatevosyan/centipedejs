$( document ).ready(function() {
    console.log("centipede!");

    (function($){
        $.fn.centipede = function(options){

            var settings = $.extend({
                alt : "My Alt",
                fade: true,
                hover: true,
                mrg : 5,
                lg_img_path : 'img/centipede/large/large',
                sm_img_path : 'img/centipede/small/small',
                lg_img_type : 'jpg',
                sm_img_type : 'jpg',
                count : 4
            }, options );

            var get_id = this.selector;
            $(get_id).append('<div id="centipede"></div>')

            var centipede = {
                main_div : "#centipede",
                large_item_class : "large_item",
                small_item_class : "small_item",
                active_class : "active",
                selected_img : ":first",
                thumbs : "thumbnail_item",
                large_img : "large_item",
                small_img : "small_item",
                alt : settings.alt,
                fade: settings.fade,
                hover: settings.hover,
                mrg: settings.mrg,
                lg_img_path: settings.lg_img_path,
                sm_img_path: settings.sm_img_path,
                lg_img_type: settings.lg_img_type,
                sm_img_type: settings.sm_img_type,
                count : settings.count,
                number : 1,
                dot : '.',
                blank : ' '
            };

            this.css({
                color : settings.color,
                backgroundColor : settings.backgroundColor
            });

            build_gallery(centipede);
            set_image_sizes(centipede);
            change_image(centipede);

            return this;
        };
    }(jQuery));

    $('.some_classRR').centipede({
        alt : "My Alt", //
        fade: true, //
        hover: true, //
        mrg : 2, //
        lg_img_path : 'img/centipede/large/large', //
        sm_img_path : 'img/centipede/small/small', //
        lg_img_type : 'jpg', //
        sm_img_type : 'jpg', //
        count : 6 //
    });

});

// build gallery dom
function build_gallery(centipede){
    console.log("build_gallery");

    var large_img = $("<div>", {class: centipede.large_img});
    var small_img = $("<div>", {class: centipede.small_img});

    $(centipede.main_div).append(large_img);
    $(centipede.main_div).append(small_img);

    var img = $('<img />', {
        src: centipede.lg_img_path + centipede.number + centipede.dot + centipede.lg_img_type,
        alt: centipede.alt
    });
    img.appendTo($(centipede.main_div + centipede.blank + centipede.dot + centipede.large_item_class));

    for(centipede.number; centipede.number <= centipede.count; centipede.number++){
        console.log('count: ', centipede.count);
        var content = $('<a href="#" class="' + centipede.thumbs +'">').append(
            '<img src="' + centipede.sm_img_path + centipede.number + centipede.dot + centipede.sm_img_type +'">'
        );
        $(centipede.main_div + centipede.blank + centipede.dot + centipede.small_item_class).append(content);
    }
}

// set image dimensions
function set_image_sizes(centipede){
    console.log("set_image_sizes");
    // set width and height of small images
    var thumb_row_w = $(centipede.main_div).width();
    var small_img_w;
    var img_right_margin = centipede.mrg;

    if (img_right_margin == 0) {
        small_img_w = thumb_row_w / centipede.count;
        $(centipede.main_div + centipede.blank + centipede.dot + centipede.small_item_class + centipede.blank + centipede.dot + centipede.thumbs).css({
            'width' : small_img_w,
            'height' : small_img_w
        });

    }else if(img_right_margin >= 0){
        var add_margin = img_right_margin/(centipede.count - 1);
        small_img_w = (thumb_row_w / centipede.count) - img_right_margin;

        $(centipede.main_div + centipede.blank + centipede.dot + centipede.small_item_class + centipede.blank + centipede.dot + centipede.thumbs).css({
            'width' : small_img_w,
            'height' : small_img_w
        });
        $(centipede.main_div + centipede.blank + centipede.dot + centipede.small_item_class + centipede.blank + centipede.dot + centipede.thumbs).not(':last').css({
            'margin-right' : img_right_margin + add_margin
        });
    }
}

// swap images after click
function change_image(centipede){
    console.log("change_image");

    $(centipede.main_div + centipede.blank + centipede.dot + centipede.small_item_class +
    centipede.blank + centipede.dot + centipede.thumbs + centipede.selected_img).addClass(centipede.active_class);

    $(centipede.main_div + centipede.blank + centipede.dot + centipede.small_item_class + centipede.blank + centipede.dot + centipede.thumbs).on('click', function(){

        var slash = '/';
        var img_path = $(this).find('img').attr('src');
        var img_string =  img_path.split(slash);
        var img_full_name = img_string[img_string.length - 1];
        var img_name = img_full_name.split(centipede.dot)[0];
        var img_ext = img_full_name.split(centipede.dot)[1];
        var get_thumb = centipede.sm_img_path.slice(centipede.sm_img_path.lastIndexOf(slash) + 1, centipede.sm_img_path.length);
        var img_num = img_name.split(get_thumb)[1];

        if($(this).siblings().hasClass(centipede.active_class)){
            $(this).siblings().removeClass(centipede.active_class);
            $(this).addClass(centipede.active_class);
        }

        if(centipede.fade){
            $(this).parents(centipede.dot + centipede.small_item_class)
                .siblings(centipede.dot + centipede.large_item_class)
                .find('img').fadeOut(400, function(){
                    $(centipede.main_div + centipede.blank + centipede.dot + centipede.small_item_class + centipede.blank + centipede.dot + centipede.thumbs)
                        .parents(centipede.dot + centipede.small_img)
                        .siblings(centipede.dot + centipede.large_img)
                        .find('img').attr('src', centipede.lg_img_path + img_num + centipede.dot + img_ext);
                }).fadeIn(400);
        }else{
            $(this).parents(centipede.dot + centipede.small_item_class)
                .siblings(centipede.dot + centipede.large_item_class)
                .find('img')
                .attr('src', centipede.lg_img_path + img_num + centipede.dot + img_ext);
        }

        return false;
    });
}