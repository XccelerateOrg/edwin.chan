$(function () {
    $("input[type=submit]").click(function (event) {
        event.preventDefault();
        let array = $("#form").serializeArray()
        let country1 = array[0].value;
        let country2 = array[1].value;
        latLng(country1, country2);
        $("#sr span:eq(0)").append(country1)
        $("#sr span:eq(2)").append(country2)
        $("#ss span:eq(0)").append(country1)
        $("#ss span:eq(2)").append(country2)
        console.log(country1, country2);

    })
    function latLng(country1, country2) {
        let promise1 = $.get(`https://restcountries.eu/rest/v2/name/${country1}`)
        let promise2 = $.get(`https://restcountries.eu/rest/v2/name/${country2}`)
        let combined = $.when(promise1, promise2)
        combined.done(function (data1, data2) {
            let latLng1 = [data1[0][0].latlng[0], data1[0][0].latlng[1]]
            console.log(latLng1);
            let latLng2 = [data2[0][0].latlng[0], data2[0][0].latlng[1]]
            console.log(latLng2);
            sunTime(latLng1, latLng2)
        })
    }
    function sunTime(latLng1, latLng2) {
        let promise3 = $.get(`https://api.sunrise-sunset.org/json?lat=${latLng1[0]}&lng=${latLng1[1]}&formatted=0`)
        let promise4 = $.get(`https://api.sunrise-sunset.org/json?lat=${latLng2[0]}&lng=${latLng2[1]}&formatted=0`)
        let combined2 = $.when(promise3, promise4)
        combined2.done(function (data3, data4) {
            console.log(data3, data4);
            let sunRise1 = new Date(data3[0].results.sunrise);
            let sunSet1 = new Date(data3[0].results.sunset);
            let sunRise2 = new Date(data4[0].results.sunrise);
            let sunSet2 = new Date(data4[0].results.sunset);
            compareTimeSr(sunRise1, sunRise2)
            compareTimeSs(sunSet1, sunSet2)
        })
    }
    function compareTimeSr(s1,s2) {
        let diff = s1-s2;
        let dateDiff = new Date(diff).toString();
        let hms = dateDiff.match(/\d{2}\:\d{2}\:\d{2}/).join("");
        if(diff>0){
            $("#sr span:eq(1)").append('later')
            $("#sr").append(hms)
        } else if ( diff < 0){
            let diff = s2-s1;
            let dateDiff = new Date(diff).toString();
            let hms = dateDiff.match(/\d{2}\:\d{2}\:\d{2}/).join("");
            $("#sr span:eq(1)").append('earlier')
            $("#sr").append(hms)
            } 

    }
    function compareTimeSs(s1,s2) {
        let diff = s1-s2;
        let dateDiff = new Date(diff).toString();
        let hms = dateDiff.match(/\d{2}\:\d{2}\:\d{2}/).join("");
        if(diff>0){
            $("#ss span:eq(1)").append('later')
            $("#ss").append(hms)
        } else if ( diff < 0){
            let diff = s2-s1;
            let dateDiff = new Date(diff).toString();
            let hms = dateDiff.match(/\d{2}\:\d{2}\:\d{2}/).join("");
            $("#ss span:eq(1)").append('earlier')
            $("#ss").append(hms)
            } 
        }  
})

