$(document).ready(function(){

   var firstTarget = $("ul:first");

    console.log(firstTarget.css({backgroundColor: "orange"}));
    console.log(firstTarget.offset().top);
    console.log(firstTarget.position().top);

    var secondTarget= firstTarget.find("li");

        console.log(secondTarget.eq(1).css({marginLeft:"30px"}));
        console.log(secondTarget.eq(3).css({color: "red"}));

    var thirdTarget= $("ul:first").children("li").filter("li:eq(3)");
        console.log("The width is: " + thirdTarget.width());

    var fourthTarget= $("#contentright").find("h3");
        console.log(fourthTarget.css({float: "right"}));
        console.log(fourthTarget.addClass("listhead"));
        console.log(fourthTarget.hasClass('listhead'));

    var fifthTarget= $("ul:last").children("li:eq(2)").attr("href", "www.us.playstation.com");
    console.log(fifthTarget);

    var sixthTarget = $("ul:last").children("li:first").siblings('li').children('a');
    sixthTarget.attr("href", "www.notgoogle.com");


});

