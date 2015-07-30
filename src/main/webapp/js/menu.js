$(document).ready(function() {


    window.scrollBarWidth = function() {
        document.body.style.overflow = 'hidden';
        var width = document.body.clientWidth;
        document.body.style.overflow = 'scroll';
        width -= document.body.clientWidth;
        if (!width)
            width = document.body.offsetWidth - document.body.clientWidth;
        document.body.style.overflow = '';
        return width;
    }


//alert( $( document ).width() + window.scrollBarWidth());
    $('#genaral-munu-area .region > ul').unwrap();
    $('.sub1-wrapper > ul').removeClass().addClass('sub1');
    $('.sub2-wrapper > ul').removeClass().addClass('sub2');

    $(".sub1-wrapper").each(function() {
        if ($(this).text() === '') {
            $(this).parent().children('span').remove();
        }
    });
    $(".sub2-wrapper").each(function() {
        if ($(this).text() === '') {
            $(this).parent().children('span').remove();
        }
    });

//when load the page..
    var menuCont = $('#genaral-munu-area >ul').html();
    $('#mobile-menu-area ul').html(menuCont);
    $('#mobile-menu-area > ul').addClass('mobile-menu')
    $('#genaral-munu-area > ul').addClass('main')

    if ($(document).width() + window.scrollBarWidth() < 768) {
        $('#genaral-munu-area').hide();
        $('#mobile-menu-area').show();
    } else {

        $('#mobile-menu-area').hide();
        $('#genaral-munu-area').show();
    }
    $(window).resize(function()
    {
        if ($(document).width() + window.scrollBarWidth() < 768) {
            $('#genaral-munu-area').hide();
            $('#mobile-menu-area').show();
        } else {
            $('#mobile-menu-area > ul').css('display', 'none');
            $('#mobile-menu-area').hide();
            $('#genaral-munu-area').show();
        }
    });

    // menu load .
    mobile();
    genaralMenu()


    // left Menu .... start
    $('#left_menu span').remove();
    $('#left_menu .sub1-wrapper').removeClass().addClass('sub1_menu_item');
    $('#left_menu .sub2-wrapper').removeClass().addClass('sub2_menu_item');
    $('#left_menu a').css('display', 'block');

    var parentClass = $('#left_menu .active').parent().parent().parent().attr('class');
    
    var leftMenuContent = '';    
    if (parentClass === 'menu_third_level') {
        leftMenuContent = $('#left_menu .sub1_menu_item .active').parent().parent().html();
    } else if(parentClass==='menu_fourth_level'){ 
            leftMenuContent =$('#left_menu .menu_fourth_level .active').parent().parent().parent().parent().parent().parent().children().html();
    }else {
        leftMenuContent = $('#left_menu .sub1_menu_item .active').parent().children('.sub2_menu_item').children('.menu_third_level').children('ul').html();
    }
    if(leftMenuContent === null){
        leftMenuContent ='';
    }
    $('#left_menu').html("<ul class=menu_third_level><h3>Looking for...</h3>" + leftMenuContent + "</ul>");

    // left menu ..... end


});

//Basic menu
function genaralMenu() {

    $("#genaral-munu-area ul li a").mouseover(function() {
      //  if(($(this).parent().change('.hidetoggle').text())){ alert('asdf');
        $("#genaral-munu-area div").css("overflow", "visible");

        var ulContent = $(this).parent('li').children('div').text();
        if (ulContent != '') {
            $(this).addClass('dropimg');
        }
        $(this).parents('li').addClass('active');

        if ($.browser.msie && parseInt($.browser.version, 10) === 7 || $.browser.msie && parseInt($.browser.version, 10) === 8) {
            $(this).parents('li').children('div').css("display", "block");
        } else {
            $(this).parent().children('div').slideDown(500, function() {

            });
        }
       // }
    });

    $("#genaral-munu-area ul li").mouseleave(function() {
        $('#genaral-munu-area li').removeClass('active');
        $(this).children('div').css("display", "none");
    });
    $("#genaral-munu-area ul li div").mouseover(function() {
        $(this).parents('li').addClass('active');
    });
}

// mobile menu query ...
function  mobile() {
    $('#mobile-menu-expan').click(function() {
        $('#main_menu #mobile-menu-area > ul').slideToggle("slow", function() {
            //$('#mobile-menu-area li ul').css('display', 'block');
        });
        $('#main_menu #mobile-menu-area ul li ').children('div').css('position', 'relative');
    });

    $("#mobile-menu-area li .hidetoggle").click(function() {
        if ($(this).attr('class') !== 'hidetoggle current_menu') {
            if ($(this).parent().children('div').attr('class') === 'sub2-wrapper' || $(this).parent().children('div').attr('class') === null) {
                $('li div.sub2-wrapper').css('display', 'none')
            } else {
                $('li div').css('display', 'none');
                $('li div.menu_third_level').css('display', 'block');
            }
            $(".hidetoggle").removeClass('current_menu');
            $("#mobile-menu-area li").removeClass('current_menu');
            $(this).addClass('current_menu');
            $(this).parent('li').addClass('current_menu');
            $(this).parent().parent().parent().parent().children('.hidetoggle').addClass('current_menu');

            $(this).parent().children('div').slideToggle("slow");
        } else {
            $(".hidetoggle").removeClass('current_menu');
            $("#mobile-menu-area li").removeClass('current_menu');
            $(this).parent().parent().parent().parent().children('.hidetoggle').addClass('current_menu');
            $(this).parent().children('div').slideToggle("slow");
        }
    });
}
