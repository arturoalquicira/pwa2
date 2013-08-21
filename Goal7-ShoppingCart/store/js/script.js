$(function(){

    $('.productitem').draggable({
        cursorAt: {
            top: 10,
            left: 10

        },

       helper:function(){

           var title= $(this).find('h4').text();
           var price = $(this).find('.price').text();

           console.log(this);

           return $('<div class="phelper">' + '<img src="images/tshirticon.png">' + title + price + '</div>');
       }

    });

    $('.cartdropbox').droppable({

        tolerance: 'touch',
        hoverClass: 'cartdropboxh',

        drop: function(e, ui){
            $('.emptycart').slideUp();

            var title= ui.draggable.find('h4').text();
            var price= ui.draggable.find('.price').text();
            var pid= ui.draggable.find('.productid').text();

            var cartitem= $('.cartitem[rel='+pid+']');
            var isMade= cartitem.length;

            if(isMade){
                var qty= cartitem.find('input.amount').val();
                qty++

                cartitem.find('input.amount').val(qty);
            }else{

            $(
            '<div class="cartitem" rel="'+pid+'">' +
            '<span class="ui-state-default trashitem"><span class="ui-icon ui-icon-trash"></span></span>' +
            '<span class="title">' + title + '</span>' +
            '<input type="text" class="amount" value="1" />' +
                '<span class="price">'+price+'</span><div class="clear"></div>' +
            '</div>'
            ).appendTo('.cartitems').hide().fadeIn();

            }
        }

    });

    var emptyDialog= $('<div><p>Are you sure you want to delete your car?</p></div>').dialog({
        title: "Empty Cart",
        autoOpen: false,
        modal: true,
        resizable: false,

        buttons:{
            'Empty': function(){
                $('.cartitem').not('.emptycart').fadeOut(function(){
                    $(this).remove();
                    emptyDialog.dialog('close');
                    checkcart();
                })
            },
            'Cancel': function(){
                emptyDialog.dialog('close');
            }
        }
    });

    var checkcart= function(){
        var howmany= $('.cartitem').not('.emptycart').length;
        console.log(howmany);
        if (howmany === 0){
            $('.emptycart').fadeIn();
        }
    };

    $('#clearcart a').on('click', function(e){

        emptyDialog.dialog('open');

        return false;
    });




});