$(function () {
    // $(".pricing nav-link").each(function (i, el) {
    //    $(el).removeClass('active');
    //    $(el).on('click', function (el) {
    //        $(this).addClass('active');
    //        el.preventDefault();
    //    })
    // });
    $('.nav-link').click(function (el) {
        $(".nav-link").each(function (i, el) { $(el).removeClass("active"); });
        $(this).addClass('active');
        el.preventDefault();
    })
    
});//end of load