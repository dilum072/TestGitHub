$(function() {
    var d = new Date("March 18, 2015 06:00:00");
    $('#counter').countdown({
        timestamp: d.getTime() + 90 * 24 * 60 * 60 * 1000
    });

});
