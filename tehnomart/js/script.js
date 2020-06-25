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

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $("#amount").val(ui.values[0] + "-" + ui.values[1]);

            $('.amount-values-min').text(ui.values[0]);
            $('.amount-values-max').text(ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + "-" + $("#slider-range").slider("values", 1));

    $('.amount-values-min').text($("#slider-range").slider("values", 0));
    $('.amount-values-max').text($("#slider-range").slider("values", 1));
});

