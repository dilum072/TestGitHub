//by manjula
var newsType;
var activeType;
var divId;
var mainDivId;
function activationFunction(div) {
    newsType, activeType, divId, mainDivId = null;
    newsType = $('#' + div.id).find('input').val();
    mainDivId = div.id;
    var dicNumber = (div.id).toString().split("_")[2];
    var opacity = parseInt($('#' + div.id).children('.btn-mod').children('.on').css('opacity'));
    if (opacity == 0) {
        $('#' + div.id).find('.on').css('opacity', '1');
        $('#' + div.id).children('.btn-mod').animate({
            'margin-left': '0'}, 'slow', function() {
            $('#' + div.id).find('.off').css('opacity', '0');
        });

        if (confirm('Please confirm to continue?')) {
            // $('#option_' + divId).hide();
            activeType = dicNumber.id;
            backendActivationCallFunction();
        } else {
            //$('#option_' + divId).hide();
            $('#' + mainDivId).children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#' + mainDivId).find('.off').css('opacity', '1');

            });
            $('#' + mainDivId).find('.on').css('opacity', '0');
        }

        //  selectActiveType(dicNumber);

    } else if (opacity == 1) {
        // $('#option_' + dicNumber).hide();
        $('#' + div.id).children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#' + div.id).find('.off').css('opacity', '1');

        });
        $('#' + div.id).find('.on').css('opacity', '0');
        if (confirm('Please confirm to continue deactivation process?')) {
            backendDeactivationCallFunction();
        } else {
            $('#' + div.id).find('.on').css('opacity', '1');
            $('#' + div.id).children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#' + div.id).find('.off').css('opacity', '0');
            });

        }
    }
}



function backendActivationCallFunction() {
    activeDeactiveFeature.activeNews(newsType, activeType, backEndActivationWebservice);
}
function backendDeactivationCallFunction() {
    activeDeactiveFeature.deactiveNews(newsType, backEndDeactivationWebservice);
}

function backEndActivationWebservice(t) {
    if ("Feature has been successfully activated" == t.toString()) {
        alert(t);
    } else {
        alert(t);
        $('#' + mainDivId).children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#' + mainDivId).find('.off').css('opacity', '1');

        });
        $('#' + mainDivId).find('.on').css('opacity', '0');
    }
}

function backEndDeactivationWebservice(t) {
    if ("Feature has been successfully deactivated" == t.toString()) {
        alert(t);
    } else {
        alert(t);
        $('#' + mainDivId).find('.on').css('opacity', '1');
        $('#' + mainDivId).children('.btn-mod').animate({
            'margin-left': '0'}, 'slow', function() {
            $('#' + mainDivId).find('.off').css('opacity', '0');
        });
    }
}

function selectActiveType(dicNumber) {
    $('#Monthly').attr('checked', false);
    $('#Daily').attr('checked', false);
    if (dicNumber.toString().length < 3) {
        $('#option_' + dicNumber).show();
        divId = dicNumber;
    } else {
        if (confirm('Please confirm to continue?')) {
            $('#option_' + divId).hide();
            activeType = dicNumber.id;
            backendActivationCallFunction();
        } else {
            $('#option_' + divId).hide();
            $('#' + mainDivId).children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#' + mainDivId).find('.off').css('opacity', '1');

            });
            $('#' + mainDivId).find('.on').css('opacity', '0');
        }
    }

}