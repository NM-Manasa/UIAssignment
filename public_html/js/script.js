$(document).ready(function () {
    var close = $('.close')[0];
    var modal = $('#myModal');
    
    $('.edit').click(function () {
        modal.show();
        var root = $(this).parent().parent().parent();
        var img = $(root).children('img').attr('src');
        $('.imgblock > img').attr("src", img);
        $('.contentblock > .title').html($(root).children('div').children('strong').html());
        $('.contentblock > .price').html($(root).siblings('.price').html());

    });

    $(close).click(function () {
        $('#myModal').hide();
    })

    $(window).click(function (e) {

        if ($(e.target).hasClass('modal')) {
            modal.hide();
        }
    });


})