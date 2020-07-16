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



