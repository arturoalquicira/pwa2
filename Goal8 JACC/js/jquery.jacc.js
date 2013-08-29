/*
 jAcc: Accordion
 Compatibility: jQuery 1.7.2+
 Author: Your Name
 */

(function($){

    $.fn.jacc = function(options){
        console.log(options);

        var opts = $.extend({}, $.fn.jacc.defaults, options);

        console.log(this);

        this.each(function(){
            console.log(this);
            var acc = $(this);
            var headers = acc.children(opts.header);
            var contents = acc.children(opts.content);

            contents.hide().eq(opts.show1).show();

            headers.on('click', function(e){
                var clicked = $(this);
                var block =clicked.next();

                if (!block.is(':animated')){

                    if(opts.multi){
                        block.slideToggle(opts.duration, opts.easing);

                    }else{
                        block
                            .slideDown(opts.duration, opts.easing)
                            .siblings(opts.content)
                            .slideUp(opts.duration, opts.easing);
                    }
                }
                e.preventDefault();
            });

        });
    };

    $.fn.jacc.defaults={
        header: 'a',
        content: 'div',
        easing: 'swing',
        duration: 400,
        multi: false,
        show1: 0
    };

})(jQuery);