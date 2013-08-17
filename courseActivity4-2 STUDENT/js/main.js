/*
Description: DESCRIPTION INFO GOES HERE
Author: YOUR NAME GOES HERE
Date: DATE GOES HERE
*/

$(function(){
    var box= $('.box');
        box.on('click', function(e){
        var that= $(this);
            that
                .css({position: 'relative'})
                .animate({top: -25},1000)
                .animate({
                    top: 125,
                    opacity: 0,
                }, 1000, 'easeInCirc', function(){
                   that.hide(1000,'easeOutBounce');
                });

            return false;

        });

});