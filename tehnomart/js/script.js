//////////////////////////////
///Вариант на jQuery
//////////////////////////////

//$(document).ready(function () {

    // //Перключатель сервисов
    // $('.services-menu li').click(function() {
    //     var id = $(this).data('id');
    //
    //     $('.services-menu li').removeClass('active');
    //     $(this).addClass('active');
    //
    //     $('.services-content').hide();
    //     $('.services-content-' + id).css('display', 'flex');
    // });
    //
    // //Слайдер на главной
    // $('.home-slider-prev').click(function() {
    //     var length = $('.slider-item').length;
    //     var index = $('.slider-item.active').index();
    //     if (index == 0) {
    //         index = length;
    //     }
    //
    //     $('.slider-item').removeClass('active');
    //     $('.slider-item:nth-child(' + index + ')').addClass('active');
    // });
    //
    // $('.home-slider-next').click(function() {
    //     var length = $('.slider-item').length;
    //     var index = $('.slider-item.active').index();
    //     index += 2;
    //     if (index > length) {
    //         index = 1;
    //     }
    //
    //     $('.slider-item').removeClass('active');
    //     $('.slider-item:nth-child(' + index + ')').addClass('active');
    // });
    //
    // //range в каталоге
    // $("#slider-range").slider({
    //     range: true,
    //     min: 0,
    //     max: 500,
    //     values: [ 75, 300 ],
    //     slide: function( event, ui ) {
    //         $("#amount").val(ui.values[0] + "-" + ui.values[1]);
    //
    //         $('.amount-values-min').text(ui.values[0]);
    //         $('.amount-values-max').text(ui.values[1]);
    //     }
    // });
    // $("#amount").val($("#slider-range").slider("values", 0) + "-" + $("#slider-range").slider("values", 1));
    //
    // $('.amount-values-min').text($("#slider-range").slider("values", 0));
    // $('.amount-values-max').text($("#slider-range").slider("values", 1));
//});


//////////////////////////////
///Вариант на чистом JS
//////////////////////////////

//Перключатель сервисов
var services_menu = document.querySelectorAll('.services-menu li');
for (var i = 0, len = services_menu.length; i < len; i++) {
    services_menu[i].addEventListener("click", function(e) {
        var id = this.dataset.id;
        var li = document.querySelectorAll('.services-menu li');
        for (var i = 0, len = li.length; i < len; i++) {
            li[i].classList.remove('active');
        }
       this.classList.add('active');


        var services = document.querySelectorAll('.services-content');
        for (var i = 0, len = services.length; i < len; i++) {
            services[i].style.display = 'none';
        }
        var services_current = document.querySelector('.services-content-' + id);
        services_current.style.display = 'flex';
    });
}



//Слайдер на главной
var home_slider_prev = document.querySelector('.home-slider-prev');
var home_slider_next = document.querySelector('.home-slider-next');
var contacts_map = document.querySelector('.contacts-map');
var button_write_show_modal = document.querySelector('.button-write-show-modal');
var modal_write = document.querySelector('.modal-write');
var modal_write_close = document.querySelector('.modal-write .modal-close');
var button_map_show_modal = document.querySelector('.contacts-map');
var modal_map = document.querySelector('.modal-map');
var modal_map_close = document.querySelector('.modal-map .modal-close');
var overlay = document.querySelector('.overlay');

var slider_item = document.querySelectorAll('.slider-item');


if (home_slider_prev) {
    home_slider_prev.addEventListener("click", function(e) {
        var length = document.querySelectorAll('.slider-item').length;
        var index = document.querySelector('.slider-item.active').length;

        var nodes = Array.prototype.slice.call( document.querySelector('.slider-items').children ),
            liRef = document.querySelector('.slider-item.active');
        var index = nodes.indexOf(liRef);

        if (index == 0) {
            index = length;
        }

        for (var i = 0, len = slider_item.length; i < len; i++) {
            slider_item[i].classList.remove('active');
        }
        var slider_item_active = document.querySelector('.slider-item:nth-child(' + index + ')');
        slider_item_active.classList.add('active');
    });
}

if (home_slider_next) {
    home_slider_next.addEventListener("click", function(e) {
        var length = document.querySelectorAll('.slider-item').length;
        var index = document.querySelector('.slider-item.active').length;

        var nodes = Array.prototype.slice.call( document.querySelector('.slider-items').children ),
            liRef = document.querySelector('.slider-item.active');
        var index = nodes.indexOf(liRef);

        index += 2;
        if (index > length) {
            index = 1;
        }

        for (var i = 0, len = slider_item.length; i < len; i++) {
            slider_item[i].classList.remove('active');
        }
        var slider_item_active = document.querySelector('.slider-item:nth-child(' + index + ')');
        slider_item_active.classList.add('active');
    });
}

if (button_write_show_modal) {
    button_write_show_modal.addEventListener("click", function(e) {
        e.preventDefault();
        modal_write.classList.add("modal-show");
        overlay.style.display = "block";
    });
}

if (modal_write_close) {
    modal_write_close.addEventListener("click", function(e) {
        e.preventDefault();
        modal_write.classList.remove("modal-show");
        overlay.style.display = "none";
    });
}

if (button_map_show_modal) {
    button_map_show_modal.addEventListener("click", function(e) {
        e.preventDefault();
        modal_map.classList.add("modal-show");
        overlay.style.display = "block";
    });
}

if (modal_map_close) {
    modal_map_close.addEventListener("click", function(e) {
        e.preventDefault();
        modal_map.classList.remove("modal-show");
        overlay.style.display = "none";
    });
}


//Так как range на JqueryUI полностью не отказываемся от jQuery
$(document).ready(function () {
    //range в каталоге

    if ($("#slider-range").length) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                document.getElementById('amount').value = ui.values[0] + "-" + ui.values[1];
                document.querySelector('.amount-values-min').textContent = ui.values[0];
                document.querySelector('.amount-values-max').textContent = ui.values[1];
            }
        });

        document.getElementById('amount').value = $("#slider-range").slider("values", 0) + "-" + $("#slider-range").slider("values", 1);
        document.querySelector('.amount-values-min').textContent = $("#slider-range").slider("values", 0);
        document.querySelector('.amount-values-max').textContent = $("#slider-range").slider("values", 1);
    }

});