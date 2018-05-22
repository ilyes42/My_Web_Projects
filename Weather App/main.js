$(function () {
    var temp = 0;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=fa184a479f2bf59553fa7d6f4ac1abc3";
            $.getJSON(weatherURL, function (data) {
                console.log(JSON.stringify(data));
                temp = data.main.temp;
                $("#location").html(data.name + ", " + data.sys.country);
                $("#weather").html(data.weather[0].main + ", " + data.weather[0].description);
                $("#temp").html(Math.round(temp - 273.15));
                $("#humid").html(data.main.humidity);
            });
            $("#tempUnit").on("click", function () {
                if ($(this).text() === "C") {
                    $(this).html("F");
                    $("#temp").html(Math.round((temp * 1.8) - 459.67));
                }
                else {
                    $(this).html("C");
                    $("#temp").html(Math.round(temp - 273.15));
                }
            });
        });
    } else {
        $("#weather").html("Geolocation is not supported by this browser.");
    }
});