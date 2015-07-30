$(document).ready(function() {
    var activeLinkText = $('#block-locale-language-content .item-list .active').text();
    var htmlList = '';
    $("#block-locale-language-content .item-list ul li").each(function() {
        if ($(this).children('a').attr('class') != 'active') {
            htmlList += '<li>' + $(this).html() + '</li>';
        }
    });
//htmlList='<div><input type="text" name="test-1" id="textfield" value="'+activeLinkText+'" /><ul class="first-text">'+htmlList+'</ul><div>';
//$('.language').html(htmlList);

    htmlList = '<div><span class="language-selector">' + activeLinkText + '</span><ul class="first-text">' + htmlList + '</ul><div>';
    $('.language').html(htmlList);

    $('.language-selector').click(function() {
        $('.first-text').slideToggle();
    })

// left menu for ie .. start
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
    if ($.browser.msie && parseInt($.browser.version, 10) === 8) {
        if ($(document).width() + window.scrollBarWidth() > 767) {
            $('.col-lg-3').css('width', '244px');
            var newWidth = $('.inner-plain-block').width() - 245;
            $('.col-lg-9').css('width', newWidth + 'px');
        } else {
            $('.col-lg-9').css('width', '100%');
            $('.col-lg-3').css('width', '100%');
        }
        $(window).resize(function() {

            if ($(document).width() + window.scrollBarWidth() > 767) {
                $('.col-lg-3').css('width', '244px');
                var newWidth = $('.inner-plain-block').width() - 245;
                $('.col-lg-9').css('width', newWidth + 'px');
            } else {
                $('.col-lg-9').css('width', '100%');
                $('.col-lg-3').css('width', '100%');
            }

        });
    }


	//Common Accodian
	$( ".comm-acco-block div.accordian-2" ).accordion({
            collapsible: true
        });
// jaquery accordion aditional function.

$('ul.coll-option a.expand-op').click(function(){
    $('.accordian-2 .panel-heading a').removeClass();
    $('.accordian-2 .cont-block').removeClass('collapse').addClass('in').css('height','auto');
    
    $('.accordian-2 span.ui-icon-triangle-1-e').removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');
    $('.accordian-2 div.ui-widget-content').addClass('ui-accordion-content-active');
     
    $('.accordian-2 h6.ui-accordion-icons').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top');
     $('.accordian-2 .cont-block').show();
});
$('ul.coll-option a.collapse-op').click(function(){
    $('.accordian-2 .panel-heading a').addClass('collapsed');
    $('.accordian-2 .panel-collapse').removeClass('in').addClass('collapse').css('height','0');
    $('.accordian-2 span.ui-icon-triangle-1-s').removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-e');
     $('.accordian-2 .cont-block').hide();
});

document.getElementById("redirect_loading").innerHTML 
})