// Кнопка возврата наверх
$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},0);
     
    });
     
    });

// Меню бургер

$(document).ready(function() {
    $('.menuToggle').click(function() {
        $(this).toggleClass('active');
        $('.menu').slideToggle(300, function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    })
})
     