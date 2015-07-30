// harsha
//by manjula
$(document).ready(function() {

    ///late night internet activation deactivation process
    // lateNightInternet();
    //socialNetworkFeature();
    // gmailFeature();
    // messagingFeature();
    // youTubeFeature();
    //  contenFilterFeature();
    // mFaxFeature();
    // mTunesFeature();
    dailyUsageFeature();
    gprsMmsFeature();
    newsAlertFeature();
    sportAlertFeature();
    missCallAlertFeature();
    voiceMailFeature();
    ebillEmailFeature();
    gprsFeature();
    //Start late night onclick function
    $('#late_night_feature').click(function() {
        var state = parseInt($('#late_night_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#late_night_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#late_night_feature').find('.off').css('opacity', '1');

            });
            $('#late_night_feature').find('.on').css('opacity', '0');
            $('#late_night_value').val(parseInt($('#late_night_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#late_night_feature').find('.on').css('opacity', '1');
            $('#late_night_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#late_night_feature').find('.off').css('opacity', '0');
            });
            $('#late_night_value').val(parseInt($('#late_night_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
    //End late night onclick function
    //Start conten base onclick function
    $('#social_network_feature').click(function() {

        var state = parseInt($('#social_network_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#social_network_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#social_network_feature').find('.off').css('opacity', '1');

            });
            $('#social_network_feature').find('.on').css('opacity', '0');
            $('#social_network_value').val(parseInt($('#social_network_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#social_network_feature').find('.on').css('opacity', '1');
            $('#social_network_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#social_network_feature').find('.off').css('opacity', '0');
            });
            $('#social_network_value').val(parseInt($('#social_network_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });


    $('#gmail_feature').click(function() {

        var state = parseInt($('#gmail_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#gmail_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#gmail_feature').find('.off').css('opacity', '1');

            });
            $('#gmail_feature').find('.on').css('opacity', '0');
            $('#gmail_value').val(parseInt($('#gmail_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#gmail_feature').find('.on').css('opacity', '1');
            $('#gmail_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#gmail_feature').find('.off').css('opacity', '0');
            });
            $('#gmail_value').val(parseInt($('#gmail_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });

    $('#messaging_feature').click(function() {

        var state = parseInt($('#messaging_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#messaging_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#messaging_feature').find('.off').css('opacity', '1');

            });
            $('#messaging_feature').find('.on').css('opacity', '0');
            $('#messaging_value').val(parseInt($('#messaging_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#messaging_feature').find('.on').css('opacity', '1');
            $('#messaging_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#messaging_feature').find('.off').css('opacity', '0');
            });
            $('#messaging_value').val(parseInt($('#messaging_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });


    $('#youtube_feature').click(function() {

        var state = parseInt($('#youtube_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#youtube_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#youtube_feature').find('.off').css('opacity', '1');

            });
            $('#youtube_feature').find('.on').css('opacity', '0');
            $('#youtube_value').val(parseInt($('#youtube_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#youtube_feature').find('.on').css('opacity', '1');
            $('#youtube_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#youtube_feature').find('.off').css('opacity', '0');
            });
            $('#youtube_value').val(parseInt($('#youtube_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
    //End conten base activation
    //Start conten filter onclick function
    $('#conten_filter_feature').click(function() {

        var state = parseInt($('#conten_filter_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#conten_filter_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#conten_filter_feature').find('.off').css('opacity', '1');

            });
            $('#conten_filter_feature').find('.on').css('opacity', '0');
            $('#conten_filter_value').val(parseInt($('#conten_filter_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#conten_filter_feature').find('.on').css('opacity', '1');
            $('#conten_filter_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#conten_filter_feature').find('.off').css('opacity', '0');
            });
            $('#conten_filter_value').val(parseInt($('#conten_filter_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
    //End conten filter activation
    //Start mFax onclick function
    $('#mfax_feature').click(function() {

        var state = parseInt($('#mfax_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#mfax_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#mfax_feature').find('.off').css('opacity', '1');

            });
            $('#mfax_feature').find('.on').css('opacity', '0');
            $('#mfax_value').val(parseInt($('#mfax_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#mfax_feature').find('.on').css('opacity', '1');
            $('#mfax_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#mfax_feature').find('.off').css('opacity', '0');
            });
            $('#mfax_value').val(parseInt($('#mfax_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });

    //End mFax activation

    //Start mTunes onclick function
    $('#mtunes_feature').click(function() {

        var state = parseInt($('#mtunes_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#mtunes_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#mtunes_feature').find('.off').css('opacity', '1');

            });
            $('#mtunes_feature').find('.on').css('opacity', '0');
            $('#mTunes_value').val(parseInt($('#mtunes_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#mtunes_feature').find('.on').css('opacity', '1');
            $('#mtunes_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#mtunes_feature').find('.off').css('opacity', '0');
            });
            $('#mTunes_value').val(parseInt($('#mtunes_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });

    //End mTunes onclick function
    // Start dailyUsage onclick funcion
    $('#sms_alert_feature').click(function() {

        var state = parseInt($('#sms_alert_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#sms_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#sms_alert_feature').find('.off').css('opacity', '1');

            });
            $('#sms_alert_feature').find('.on').css('opacity', '0');
            $('#sms_alert_value').val(parseInt($('#sms_alert_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#sms_alert_feature').find('.on').css('opacity', '1');
            $('#sms_alert_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#sms_alert_feature').find('.off').css('opacity', '0');
            });
            $('#sms_alert_value').val(parseInt($('#sms_alert_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
    // End dailyUsage onclick function
    // Start Gprs & MMS activatio onclick furction
    $('#gprs_mms_feature').click(function() {

        var state = parseInt($('#gprs_mms_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#gprs_mms_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#gprs_mms_feature').find('.off').css('opacity', '1');

            });
            $('#gprs_mms_feature').find('.on').css('opacity', '0');
            $('#gprs_mms_value').val(parseInt($('#gprs_mms_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#gprs_mms_feature').find('.on').css('opacity', '1');
            $('#gprs_mms_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#gprs_mms_feature').find('.off').css('opacity', '0');
            });
            $('#gprs_mms_value').val(parseInt($('#gprs_mms_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
    //End Grrs & MMS activation onclick function 
    //Start news alert activation onclick function
//    $('#new_alert_feature').click(function() {
//
//        var state = parseInt($('#new_alert_feature').children('.btn-mod').css('margin-left'));
//
//        if (state > -80) {
//            $('#new_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
//                $('#new_alert_feature').find('.off').css('opacity', '1');
//
//            });
//            $('#new_alert_feature').find('.on').css('opacity', '0');
//            $('#news_alert_value').val(parseInt($('#new_alert_feature').children('.btn-mod').children('.on').css('opacity')));
//        } else {
//
//            $('#new_alert_feature').find('.on').css('opacity', '1');
//            $('#new_alert_feature').children('.btn-mod').animate({
//                'margin-left': '0'}, 'slow', function() {
//                $('#new_alert_feature').find('.off').css('opacity', '0');
//            });
//            $('#news_alert_value').val(parseInt($('#new_alert_feature').children('.btn-mod').children('.on').css('opacity')));
//        }
//    });
    //End new alert activation onclick function
    //Start sport alert activation onclick function
    $('#sport_alert_feature').click(function() {

        var state = parseInt($('#sport_alert_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#sport_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#sport_alert_feature').find('.off').css('opacity', '1');

            });
            $('#sport_alert_feature').find('.on').css('opacity', '0');
            $('#sport_alert_value').val(parseInt($('#sport_alert_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#sport_alert_feature').find('.on').css('opacity', '1');
            $('#sport_alert_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#sport_alert_feature').find('.off').css('opacity', '0');
            });
            $('#sport_alert_value').val(parseInt($('#sport_alert_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
    //End sport alert activation onclick function
    //Start miss call alert activation onclick function
    $('#misscall_alert_feature').click(function() {

        var state = parseInt($('#misscall_alert_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#misscall_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#misscall_alert_feature').find('.off').css('opacity', '1');

            });
            $('#misscall_alert_feature').find('.on').css('opacity', '0');
            $('#misscall_value').val(parseInt($('#misscall_alert_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#misscall_alert_feature').find('.on').css('opacity', '1');
            $('#misscall_alert_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#misscall_alert_feature').find('.off').css('opacity', '0');
            });
            $('#misscall_value').val(parseInt($('#misscall_alert_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });

    //End miss call alert activation onclick function
    //Start voice mail activation onclick function
    $('#voice_mail_feature').click(function() {

        var state = parseInt($('#voice_mail_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#voice_mail_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#voice_mail_feature').find('.off').css('opacity', '1');

            });
            $('#voice_mail_feature').find('.on').css('opacity', '0');
            $('#voice_mail_value').val(parseInt($('#voice_mail_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#voice_mail_feature').find('.on').css('opacity', '1');
            $('#voice_mail_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#voice_mail_feature').find('.off').css('opacity', '0');
            });
            $('#voice_mail_value').val(parseInt($('#voice_mail_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
    //End voice mail activation onclick function
//Start ebill email activation onclick function
    $('#send_bill_email_feature').click(function() {

        var state = parseInt($('#send_bill_email_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#send_bill_email_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#send_bill_email_feature').find('.off').css('opacity', '1');

            });
            $('#send_bill_email_feature').find('.on').css('opacity', '0');
            $('#bill_mail_value').val(parseInt($('#send_bill_email_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#send_bill_email_feature').find('.on').css('opacity', '1');
            $('#send_bill_email_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#send_bill_email_feature').find('.off').css('opacity', '0');
            });
            $('#bill_mail_value').val(parseInt($('#send_bill_email_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
//End ebill email activation onclick function

//Start gprs activation onclick function
    $('#gprs_feature').click(function() {

        var state = parseInt($('#gprs_feature').children('.btn-mod').css('margin-left'));

        if (state > -80) {
            $('#gprs_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
                $('#gprs_feature').find('.off').css('opacity', '1');

            });
            $('#gprs_feature').find('.on').css('opacity', '0');
            $('#gprs_value').val(parseInt($('#gprs_feature').children('.btn-mod').children('.on').css('opacity')));
        } else {

            $('#gprs_feature').find('.on').css('opacity', '1');
            $('#gprs_feature').children('.btn-mod').animate({
                'margin-left': '0'}, 'slow', function() {
                $('#gprs_feature').find('.off').css('opacity', '0');
            });
            $('#gprs_value').val(parseInt($('#gprs_feature').children('.btn-mod').children('.on').css('opacity')));
        }
    });
//End gprs activation onclick function

});















///Strat latenight internet activation
function lateNightInternet() {
    $('#late_night_value').val(parseInt($('#late_night_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveLateNight(lateNightStatus);
}

function lateNightStatus(t) {
    if (!t) {
        $('#late_night_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#late_night_feature').find('.off').css('opacity', '1');

        });
        $('#late_night_feature').find('.on').css('opacity', '0');
        $('#late_night_value').val(parseInt($('#late_night_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
////End latenight internet activation

///Start conten base feature activation
function socialNetworkFeature() {
    $('#social_network_value').val(parseInt($('#social_network_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isSocialNetworkFeature(socialNetworkStatus);
}

function socialNetworkStatus(t) {

    if (!t) {
        $('#social_network_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#social_network_feature').find('.off').css('opacity', '1');

        });
        $('#social_network_feature').find('.on').css('opacity', '0');
        $('#social_network_value').val(parseInt($('#social_network_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}

function gmailFeature() {
    $('#gmail_value').val(parseInt($('#gmail_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isGmailFeature(gmailStatus);
}

function gmailStatus(t) {
    if (!t) {
        $('#gmail_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#gmail_feature').find('.off').css('opacity', '1');

        });
        $('#gmail_feature').find('.on').css('opacity', '0');
        $('#gmail_value').val(parseInt($('#gmail_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}

function messagingFeature() {
    $('#messaging_value').val(parseInt($('#messaging_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isMessagingFeature(messagingStatus);
}

function messagingStatus(t) {
    if (!t) {
        $('#messaging_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#messaging_feature').find('.off').css('opacity', '1');

        });
        $('#messaging_feature').find('.on').css('opacity', '0');
        $('#messaging_value').val(parseInt($('#messaging_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}

function youTubeFeature() {
    $('#youtube_value').val(parseInt($('#youtube_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isYouTubeFeature(youTubeStatus);
}

function youTubeStatus(t) {
    if (!t) {
        $('#youtube_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#youtube_feature').find('.off').css('opacity', '1');

        });
        $('#youtube_feature').find('.on').css('opacity', '0');
        $('#youtube_value').val(parseInt($('#youtube_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}

///End conten base feature activation
//Start conten filtering feature activation
function contenFilterFeature() {
    $('#conten_filter_value').val(parseInt($('#conten_filter_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveContenFilter(contenFilterStatus);
}

function contenFilterStatus(t) {
    if (t) {
        $('#conten_filter_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#conten_filter_feature').find('.off').css('opacity', '1');

        });
        $('#conten_filter_feature').find('.on').css('opacity', '0');
        $('#conten_filter_value').val(parseInt($('#conten_filter_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End conten filtering feature activation
//Start mFax activation 
function mFaxFeature() {
    $('#mfax_value').val(parseInt($('#mfax_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActivemFax(mFaxStatus);
}

function mFaxStatus(t) {
    if (!t) {
        $('#mfax_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#mfax_feature').find('.off').css('opacity', '1');

        });
        $('#mfax_feature').find('.on').css('opacity', '0');
        $('#mfax_value').val(parseInt($('#mfax_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End mFax activation
//Start mTunes Activation
function mTunesFeature() {
    $('#mTunes_value').val(parseInt($('#mtunes_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActivemTunes(mTunesStatus);
}

function mTunesStatus(t) {
    if (t) {
        $('#mtunes_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#mtunes_feature').find('.off').css('opacity', '1');

        });
        $('#mtunes_feature').find('.on').css('opacity', '0');
        $('#mTunes_value').val(parseInt($('#mtunes_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End mTunes activation

//Start daily usage activation
function dailyUsageFeature() {
    $('#sms_alert_value').val(parseInt($('#sms_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveDailyUsage(dailyUsageStatus);
}

function dailyUsageStatus(t) {
    if (!t) {
        $('#sms_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#sms_alert_feature').find('.off').css('opacity', '1');

        });
        $('#sms_alert_feature').find('.on').css('opacity', '0');
        $('#sms_alert_value').val(parseInt($('#sms_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End daily usage activation
//Start GPRS& MMS setting activation
function gprsMmsFeature() {
    $('#gprs_mms_value').val(parseInt($('#gprs_mms_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveMms(gprsMmsStatus);
}

function gprsMmsStatus(t) {
    if (!t) {
        $('#gprs_mms_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#gprs_mms_feature').find('.off').css('opacity', '1');

        });
        $('#gprs_mms_feature').find('.on').css('opacity', '0');
        $('#gprs_mms_value').val(parseInt($('#gprs_mms_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End GPRS& MMS setting activation
//Start  Gprs setting activation
function gprsFeature() {
    $('#gprs_value').val(parseInt($('#gprs_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveGprs(gprsStatus);
}

function gprsStatus(t) {
    if (!t) {
        $('#gprs_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#gprs_feature').find('.off').css('opacity', '1');

        });
        $('#gprs_feature').find('.on').css('opacity', '0');
        $('#gprs_value').val(parseInt($('#gprs_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End Gprs setting activation
//Start News Alert activation 
function newsAlertFeature() {
    $('#news_alert_value').val(parseInt($('#new_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveNewsAlert(newsAlertStatus);
}

function newsAlertStatus(t) {
    if (t) {
        $('#new_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#new_alert_feature').find('.off').css('opacity', '1');

        });
        $('#new_alert_feature').find('.on').css('opacity', '0');
        $('#news_alert_value').val(parseInt($('#new_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End New Alert activation 
//Start sport alert activation
function sportAlertFeature() {
    $('#sport_alert_value').val(parseInt($('#sport_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveSportAlert(sportAlertStatus);
}

function sportAlertStatus(t) {
    if (t) {
        $('#sport_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#sport_alert_feature').find('.off').css('opacity', '1');

        });
        $('#sport_alert_feature').find('.on').css('opacity', '0');
        $('#sport_alert_value').val(parseInt($('#sport_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End sport alert activation
//Start Miss call alert activation 
function missCallAlertFeature() {
    $('#misscall_value').val(parseInt($('#misscall_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveMIssCallAlert(missCallAlertStatus);
}

function missCallAlertStatus(t) {
    if (!t) {
        $('#misscall_alert_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#misscall_alert_feature').find('.off').css('opacity', '1');

        });
        $('#misscall_alert_feature').find('.on').css('opacity', '0');
        $('#misscall_value').val(parseInt($('#misscall_alert_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}

//End Miss call alert activation
//Start voice mail feature activation
function voiceMailFeature() {
    $('#voice_mail_value').val(parseInt($('#voice_mail_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveVoiceMail(voiceMailStatus);
}

function voiceMailStatus(t) {
    if (t) {
        $('#voice_mail_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#voice_mail_feature').find('.off').css('opacity', '1');

        });
        $('#voice_mail_feature').find('.on').css('opacity', '0');
        $('#voice_mail_value').val(parseInt($('#voice_mail_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}
//End voice mail feature activation
//Start send ebill email activation
function ebillEmailFeature() {
    $('#bill_mail_value').val(parseInt($('#send_bill_email_feature').children('.btn-mod').children('.on').css('opacity')));
    activeDeactiveFeature.isActiveEbillEmail(ebillEmailStatus);
}

function ebillEmailStatus(t) {
    if (!t) {
        $('#send_bill_email_feature').children('.btn-mod').animate({'margin-left': '-80'}, 'slow', function() {
            $('#send_bill_email_feature').find('.off').css('opacity', '1');

        });
        $('#send_bill_email_feature').find('.on').css('opacity', '0');
        $('#bill_mail_value').val(parseInt($('#send_bill_email_feature').children('.btn-mod').children('.on').css('opacity')));
    }
}

//End send ebill email activation