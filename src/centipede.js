$( document ).ready(function() {

    (function($){
        $.fn.centipedejs = function(options){
            var settings = $.extend({
                target : this.selector,
                position: "left",
                caption: false
            }, options );

            var centipedejs = {
                target: settings.target,
                sidebar: "sidebar",
                active_class : "c_active",
                position: settings.position,
                caption: settings.caption
            };

            set_css(centipedejs);
            set_arrows();
            set_main_image(centipedejs);
            change_image(centipedejs);

            return this;
        };
    }(jQuery));


});

function set_arrows(){

    $('<span class="c_sidebar_nav prev"></span>').insertBefore('.c_sidebar');
    $('<span class="c_sidebar_nav next"></span>').insertAfter('.c_sidebar');

    if($(window).width() <= '360') {
        $('.c_main').find('.c_main_nav.prev').remove();
        $('.c_main').find('.c_main_nav.next').remove();
        $('<span class="c_main_nav prev"></span>').insertBefore('#c_wrap_inner');
        $('<span class="c_main_nav next"></span>').insertAfter('#c_wrap_inner');
    }

    $(window).resize(function() {
        if($(window).width() <= '360') {
            $('.c_main').find('.c_main_nav.prev').remove();
            $('.c_main').find('.c_main_nav.next').remove();
            $('<span class="c_main_nav prev"></span>').insertBefore('#c_wrap_inner');
            $('<span class="c_main_nav next"></span>').insertAfter('#c_wrap_inner');
        }
    });
}

function set_css(centipedejs){
    
    var inner = $("#c_inner"),
        sidebar_item = $('.c_thumbnails .c_item'),
        def_caption,
        def_src = inner.find('img').attr('src');
    //sidebar_item.first().addClass(centipedejs.active_class);

    sidebar_item.each(function(){
        // search caption for first image
        var search_caption = $(this).find('img').attr('src');
        if(def_src == search_caption){
            def_caption = $(this).find('.c_caption').text();
            $(this).addClass(centipedejs.active_class);
        }
    });

    if(centipedejs.caption){
        inner.find('.c_main_caption').remove();
        inner.append('<div class="c_main_caption">' + def_caption + '</div>');
    }


    if(centipedejs.position == "bottom"){

        // horizontal sidebar in the bottom
        $(centipedejs.target).addClass('c_bottom');

        var link,
            item_width = sidebar_item.outerWidth(),
            count = sidebar_item.length;

        $('.c_thumbnails').width(item_width * count);

        $(document).on('click', '.c_sidebar_nav.prev', function(){
            link = 'prev';
            change_horizontal_slides(link);
        });
        $(document).on('click', '.c_sidebar_nav.next', function(){
            link = 'next';
            change_horizontal_slides(link);
        });

    }else if(centipedejs.position == "left"){

        // right side vertical sidebar
        $(centipedejs.target).addClass('c_left');
        var link;

        $(document).on('click', '.c_sidebar_nav.prev', function(){
            link = 'prev';
            change_vertical_slides(link);
        });
        $(document).on('click', '.c_sidebar_nav.next', function(){
            link = 'next';
            change_vertical_slides(link);
        });

    }else if(centipedejs.position == "right"){
        // right side vertical sidebar
        $(centipedejs.target).addClass('c_right');
        var link;

        $(document).on('click', '.c_sidebar_nav.prev', function(){
            link = 'prev';
            change_vertical_slides(link);
        });
        $(document).on('click', '.c_sidebar_nav.next', function(){
            link = 'next';
            change_vertical_slides(link);
        });

    }

    function change_horizontal_slides(link){
        var sidebar = $('.c_sidebar');
        var width = sidebar.width();
        var leftPos = $('.c_sidebar').scrollLeft();
        if(link == 'prev'){
            sidebar.animate({scrollLeft: leftPos - width});
        }else if(link == 'next'){
            sidebar.animate({scrollLeft: leftPos + width});
        }
    }

    function change_vertical_slides(link){
        var sidebar = $('.c_sidebar');
        var height = sidebar.height();
        var topPos = $('.c_sidebar').scrollTop();
        if(link == 'prev'){
            sidebar.animate({scrollTop: topPos - height});
        }else if(link == 'next'){
            sidebar.animate({scrollTop: topPos + height});
        }
    }


}

function change_image(centipedejs){

    var inner = $("#c_inner");

    $('.c_sidebar ul .c_item').on('click', function(){

        var src = $(this).find('img').attr('src'),
            alt = $(this).find('img').attr('alt'),
            c_main_caption = $(this).find('.c_caption').text();

        // Create a copy of the image in the slider...
        inner.append('<img src="' + src + '" alt="' + alt +'">');

        // temporarily change some values to make the
        //  scrolling smooth...
        var images = $("#c_inner img");
        var img_count = images.length,
            img_width = images.width();

        inner.width(img_width * img_count);

        // ...set up the scrolling...
        var c_wrap_inner = $('#c_wrap_inner');
        var leftPos = c_wrap_inner.scrollLeft();
        c_wrap_inner.animate(
            {scrollLeft: leftPos + img_width}, 250, function(){
                inner.width(images.width()).find("img:first").remove()

                if(c_main_caption != '' && c_main_caption != null && centipedejs.caption == true){
                    inner.find('.c_main_caption').remove();
                    inner.append('<div class="c_main_caption">' + c_main_caption + '</div>');
                }
            });

        $('.c_thumbnails .c_item').removeClass(centipedejs.active_class);
        $(this).addClass(centipedejs.active_class);
    });

    $(window).resize(function() {
        // recover main image size after window resize
        var images = $("#c_inner img");
        var img_count = images.length,
            img_width = images.width();
        inner.width(img_width * img_count);
    });

}

function set_main_image(centipedejs){

    var inner = $("#c_inner");

    if($(window).width() <= '360'){

        $('.c_main .prev').on('click', function(){
            var slide_src = $(this).siblings('#c_wrap_inner').find('img').attr('src'),
                slide_alt = $(this).siblings('#c_wrap_inner').find('img').attr('alt'),
                sidebar = $('.c_thumbnails .c_item');

            for(var i = 1; i <= sidebar.length; i++ ){

                if(i - 1 == 0){
                    var subtract_one = sidebar.length,
                        nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                        s_src = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('src'),
                        s_alt = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('alt'),
                        c_main_caption = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('.c_caption').text();
                }else{
                    var subtract_one = i - 1,
                        nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                        s_src = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('src'),
                        s_alt = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('alt'),
                        c_main_caption = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('.c_caption').text();
                }

                if(slide_src == nth){
                    inner.append('<img src="' + s_src + '" alt="' + s_alt +'">');

                    // temporarily change some values to make the
                    //  scrolling smooth...
                    var images = $("#c_inner img");
                    var img_count = images.length,
                        img_width = images.width();

                    inner.width(img_width * img_count);

                    // ...set up the scrolling...
                    var c_wrap_inner = $('#c_wrap_inner');
                    var leftPos = c_wrap_inner.scrollLeft();
                    var app = '<div class="c_main_caption">' + c_main_caption + '</div>'
                    c_wrap_inner.animate(
                        {scrollLeft: leftPos - img_width},
                        250,
                        function(){
                            inner.width(images.width()).find("img:first").remove();

                            if(c_main_caption != '' && c_main_caption != null && centipedejs.caption == true){
                                inner.find('.c_main_caption').remove();
                                inner.append(app);
                            }
                        });
                }
            }

        });
        $('.c_main .next').on('click', function(){
            var slide_src = $(this).siblings('#c_wrap_inner').find('img').attr('src'),
                slide_alt = $(this).siblings('#c_wrap_inner').find('img').attr('alt'),
                sidebar = $('.c_thumbnails .c_item');

            for(var i = 1; i <= sidebar.length; i++ ){

                if(i == sidebar.length){
                    var add_one = 1,
                        nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                        s_src = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('src'),
                        s_alt = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('alt');
                    if(centipedejs.caption) {
                        var c_main_caption = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('.c_caption').text();
                    }
                }else{
                    var add_one = i + 1,
                        nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                        s_src = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('src'),
                        s_alt = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('alt');
                    if(centipedejs.caption) {
                        var c_main_caption = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('.c_caption').text();
                    }

                }

                if(slide_src == nth){
                    inner.append('<img src="' + s_src + '" alt="' + s_alt +'">');

                    // temporarily change some values to make the
                    //  scrolling smooth...
                    var images = $("#c_inner img");
                    var img_count = images.length,
                        img_width = images.width();

                    inner.width(img_width * img_count);

                    // ...set up the scrolling...
                    var c_wrap_inner = $('#c_wrap_inner');
                    var leftPos = c_wrap_inner.scrollLeft();
                    var app = '<div class="c_main_caption">' + c_main_caption + '</div>'
                    c_wrap_inner.animate(
                        {scrollLeft: leftPos + img_width},
                        250,
                        function(){
                            inner.width(images.width()).find("img:first").remove();

                            if(c_main_caption != '' && c_main_caption != null && centipedejs.caption == true){
                                inner.find('.c_main_caption').remove();
                                inner.append(app);
                            }
                        });
                }
            }

        });
    }

    $(window).resize(function() {
        if($(window).width() <= '360') {


            $('.c_main .prev').on('click', function(){

                var slide_src = $(this).siblings('#c_wrap_inner').find('img').attr('src'),
                    slide_alt = $(this).siblings('#c_wrap_inner').find('img').attr('alt'),
                    sidebar = $('.c_thumbnails .c_item');

                for(var i = 1; i <= sidebar.length; i++ ){

                    if(i - 1 == 0){
                        var subtract_one = sidebar.length,
                            nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                            s_src = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('src'),
                            s_alt = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('alt'),
                            c_main_caption = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('.c_caption').text();
                    }else{
                        var subtract_one = i - 1,
                            nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                            s_src = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('src'),
                            s_alt = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('img').attr('alt'),
                            c_main_caption = $('.c_thumbnails .c_item:nth-child(' + subtract_one + ')').find('.c_caption').text();
                    }

                    if(slide_src == nth){
                        inner.append('<img src="' + s_src + '" alt="' + s_alt +'">');

                        // temporarily change some values to make the
                        //  scrolling smooth...
                        var images = $("#c_inner img");
                        var img_count = images.length,
                            img_width = images.width();

                        inner.width(img_width * img_count);

                        // ...set up the scrolling...
                        var c_wrap_inner = $('#c_wrap_inner');
                        var leftPos = c_wrap_inner.scrollLeft();
                        var app = '<div class="c_main_caption">' + c_main_caption + '</div>'
                        c_wrap_inner.animate(
                            {scrollLeft: leftPos - img_width},
                            250,
                            function(){
                                inner.width(images.width()).find("img:first").remove();

                                if(c_main_caption != '' && c_main_caption != null && centipedejs.caption == true){
                                    inner.find('.c_main_caption').remove();
                                    inner.append(app);
                                }
                            });
                    }
                }

            });

            $('.c_main .next').on('click', function(){
                var slide_src = $(this).siblings('#c_wrap_inner').find('img').attr('src'),
                    slide_alt = $(this).siblings('#c_wrap_inner').find('img').attr('alt'),
                    sidebar = $('.c_thumbnails .c_item');

                for(var i = 1; i <= sidebar.length; i++ ){

                    if(i == sidebar.length){
                        var add_one = 1,
                            nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                            s_src = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('src'),
                            s_alt = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('alt');
                        if(centipedejs.caption) {
                            var c_main_caption = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('.c_caption').text();
                        }
                    }else{
                        var add_one = i + 1,
                            nth = $('.c_thumbnails .c_item:nth-child(' + i + ')').find('img').attr('src'),
                            s_src = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('src'),
                            s_alt = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('img').attr('alt');
                        if(centipedejs.caption) {
                            var c_main_caption = $('.c_thumbnails .c_item:nth-child(' + add_one + ')').find('.c_caption').text();
                        }

                    }

                    if(slide_src == nth){
                        inner.append('<img src="' + s_src + '" alt="' + s_alt +'">');

                        // temporarily change some values to make the
                        //  scrolling smooth...
                        var images = $("#c_inner img");
                        var img_count = images.length,
                            img_width = images.width();

                        inner.width(img_width * img_count);

                        // ...set up the scrolling...
                        var c_wrap_inner = $('#c_wrap_inner');
                        var leftPos = c_wrap_inner.scrollLeft();
                        var app = '<div class="c_main_caption">' + c_main_caption + '</div>'
                        c_wrap_inner.animate(
                            {scrollLeft: leftPos + img_width},
                            250,
                            function(){
                                inner.width(images.width()).find("img:first").remove();

                                if(c_main_caption != '' && c_main_caption != null && centipedejs.caption == true){
                                    inner.find('.c_main_caption').remove();
                                    inner.append(app);
                                }
                            });
                    }
                }

            });

        }
    });


}