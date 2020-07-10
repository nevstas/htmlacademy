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

