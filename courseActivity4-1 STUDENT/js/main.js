$(document).ready(function(){

   var toolTips= $('.tooltip');

    toolTips.on({

    mouseenter: function(e){
        var that= $(this).next();
            that.css({
                display: 'block',
                top: e.pageY + 3,
                left: e.pageX + 3

            });
        return false;

    },

    mousemove: function(e){
        var that= $(this).next();
            that.css({
                top: e.pageY + 3,
                left: e.pageX + 3
            });
        return false;

    },

    mouseleave: function(e){
        var that= $(this).next();
            that.hide();
        return false;
    }


    });

    $('<img src="http://www.nasa.gov/centers/goddard/images/content/96658main_galaxy_string_2.jpg" width="500" height="350" />').on(
        'load', function(e){
            $(this)
                .appendTo('#imgbox')
                .css({opacity: 0})
                .animate({opacity: 1}, 2000)
            ;
        }
    );



});