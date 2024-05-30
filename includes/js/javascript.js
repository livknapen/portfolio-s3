$(".arrow-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".divmainall").offset().top},
        'slow');
});