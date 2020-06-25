$(document).ready(function () {

    $('.services-menu li').click(function() {
        var id = $(this).data('id');

        $('.services-menu li').removeClass('active');
        $(this).addClass('active');

        $('.services-content').hide();
        $('.services-content-' + id).css('display', 'flex');
    });

    $('.home-slider-prev').click(function() {
        var length = $('.slider-item').length;
        var index = $('.slider-item.active').index();
        if (index == 0) {
            index = length;
        }

        $('.slider-item').removeClass('active');
        $('.slider-item:nth-child(' + index + ')').addClass('active');
    });

    $('.home-slider-next').click(function() {
        var length = $('.slider-item').length;
        var index = $('.slider-item.active').index();
        index += 2;
        if (index > length) {
            index = 1;
        }

        $('.slider-item').removeClass('active');
        $('.slider-item:nth-child(' + index + ')').addClass('active');
    });

});

