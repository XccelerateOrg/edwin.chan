$(function () {

    $("input[type=submit]").click(function (event) {
        event.preventDefault();
        let serializedArray = $('#form').serializeArray();
        let lat = serializedArray[1].value;
        let lng = serializedArray[0].value;
        $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`)
            .done(function (data) {
                let sunRiseM = new Date(data.results.sunrise);
                let sunSetM = new Date(data.results.sunset);
                let OtherDayTime = sunRiseM - sunSetM;
                $("#sr").append(new Date(data.results.sunrise))
                $("#ss").append(new Date(data.results.sunset))
                $("input[type=button]").click(function () {
                    const hkLng = 114.15769;
                    const hkLat = 22.28552;
                    $.get(`https://api.sunrise-sunset.org/json?lat=${hkLat}&lng=${hkLng}&formatted=0`)
                        .done(function (data) {
                            let hkDayTime = new Date(data.results.sunset) - new Date(data.results.sunrise);
                            let diff = OtherDayTime - hkDayTime;
                            function compare() {
                                (diff < 0) ? $("#ss").after("Your input has a shorter daytime than Hong Kong") : $("#ss").after("Your input has a shorter daytime than Hong Kong")
                            }
                            compare()
                        })
                })
            })
    })
})

