var burger_block = document.querySelector('.main-header__logo-burger-block');
var main_header_wrapper = document.querySelector('.main-header__wrapper');

burger_block.addEventListener("click", function(e) {
    var top_nav = document.querySelector(".top-nav");
    if (top_nav.classList.contains("top-nav--closed")) {
        top_nav.classList.remove("top-nav--closed");
        top_nav.classList.add("top-nav--opened");

        main_header_wrapper.classList.remove("main-header__wrapper--closed");
        main_header_wrapper.classList.add("main-header__wrapper--opened");
    } else {
        top_nav.classList.remove("top-nav--opened");
        top_nav.classList.add("top-nav--closed");

        main_header_wrapper.classList.remove("main-header__wrapper--opened");
        main_header_wrapper.classList.add("main-header__wrapper--closed");
    }


});

var map = document.getElementById('map');
if (map) {
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.93863506417266,30.323117499999945],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: []
        });

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [59.93863506417266,30.323117499999945] // координаты точки
            }
        });

// Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);
    }
}


$(document).ready(function () {
    $('.rewiews__list').slick({
        dots: true,
    });
});

var pricelist_dot = document.querySelectorAll('.pricelist__dot');
var pricelist_table = document.querySelector('.pricelist__table');

for (var i = 0, len = pricelist_dot.length; i < len; i++) {
    pricelist_dot[i].addEventListener("click", function(e) {
        for (var i = 0, len = pricelist_dot.length; i < len; i++) {
            pricelist_dot[i].classList.remove('pricelist__dot--active');
        }
        this.classList.add('pricelist__dot--active');

        var nodes = Array.prototype.slice.call( document.querySelector('.pricelist__dots').children ),
            liRef = document.querySelector('.pricelist__dot.pricelist__dot--active');
        var index = nodes.indexOf(liRef);
        index++;

        pricelist_table.style.left = "calc(-" + (100 * index) + "vw)";
    });
}

var write_label = document.querySelectorAll('.write__label');

for (var i = 0, len = write_label.length; i < len; i++) {
    write_label[i].addEventListener("click", function(e) {

        for (var i = 0, len = write_label.length; i < len; i++) {
            write_label[i].classList.remove('write__label--active');
        }
        this.classList.add('write__label--active');

        var input_id = this.getAttribute("for");
        var write_input = document.querySelectorAll('.write__input');
        for (var i = 0, len = write_input.length; i < len; i++) {
            write_input[i].classList.remove('write__input--active');
        }
        var current_write_input = document.getElementById(input_id);
        current_write_input.classList.add('write__input--active');

    });
}