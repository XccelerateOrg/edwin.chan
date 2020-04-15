$(function () {
    $("input[type=submit]").click(function (event) {
        event.preventDefault();
        let array = $("#form").serializeArray()
        let country1 = array[0].value;
        let country2 = array[1].value;
        latLng(country1, country2);
    })
    function latLng(country1, country2) {
        $.get(`https://restcountries.eu/rest/v2/name/${country1}`)
            .done(function (data1) {
                latLng1 = [data1[0].latlng[0], data1[0].latlng[1]]
                console.log(latLng1);
            })
        $.get(`https://restcountries.eu/rest/v2/name/${country2}`)
            .done(function (data2) {
                latLng2 = [data2[0].latlng[0], data2[0].latlng[1]]
                console.log(latLng2);
            })
            sunTime(latLng1, latLng2)
    }

    function sunTime(latLng1, latLng2) {
        $.get(`https://api.sunrise-sunset.org/json?lat=${latLng1[0]}&lng=${latLng1[1]}&formatted=0`)
            .done(function (data1) {
                let sunRise1 = new Date(data1.results.sunrise);
                let sunSet1 = new Date(data1.results.sunset);
            })
        $.get(`https://api.sunrise-sunset.org/json?lat=${latLng2[0]}&lng=${latLng2[1]}&formatted=0`)
            .done(function (data2) {
                let sunRise2 = new Date(data2.results.sunrise);
                let sunSet2 = new Date(data2.results.sunset);
            })
            compareTime(sunRise1,sunRise2)
    }
    function compareTime(){
        if(sunRise1-sunRise2>0){
            $("#sr span").append('later')
        }
    }
            
})

        // let combined = $.when(promise1,promise2);
        // combined
        // latLng2= [data2[0].latlng[0],data2[0].latlng[1]]
        // console.log(latLng1);
        // console.log(data1);