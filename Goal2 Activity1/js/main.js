//$(document).ready(function(){
//
//});


$(function(){

    var topDiv= $('#topdiv'),
        wrap= $('#wrap'),
        anchor= $('a'),
        lis= $('#wrap ul li')
        userName= $('#username');

    console.log(topDiv.css('position'));
    console.log(topDiv.position().top);
    console.log(wrap.width());
    console.log(anchor.attr('href'));
    console.log(userName.val());
    console.log(userName.val('FullSail'));

    topDiv.css({left:'200px'});

    wrap.css({
        width: 600,
        height: 600
    });

    lis.toggleClass('hilite');
    console.log(lis.hasClass('hilite'));


});