
  let a = document.querySelector("#city");
  let b = document.querySelector("button")
  b.addEventListener("click", () => {
    let url = fetch(
      `https://api.weatherapi.com/v1/current.json?key=ee95633e89ed405bb29141901241911&q=${a.value}&aqi=yes`
    );
    console.log(a.value);
    url
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        let Currentcountry = document.querySelector(".curr_location");
        let CurrentDate = document.querySelector(".Datetime");
        let CurrentCity = document.querySelector(".Location");
        let CurrentTemp = document.querySelector("#tempInCel");
        let CurrentTempInf = document.querySelector("#tempInf");
        let CurrentWeather = document.querySelector(".weather");
        let CurrentHumidity = document.querySelector(".Humidity");
        let Currentprec_in = document.querySelector(".Precipitation");
        let CurrentWeatherspeed = document.querySelector(".W-Speed");
        let b = val.current.condition.icon;
        document.getElementById("cr_img").src = b;
        Currentcountry.innerHTML = val.location.country;
        CurrentCity.innerHTML = val.location.name;
        CurrentDate.innerHTML = val.location.localtime;
        CurrentTemp.innerHTML = `${val.current.temp_c}C`;
        CurrentTempInf.innerHTML = `${val.current.temp_f}F`;
        CurrentWeather.innerHTML = val.current.condition.text;
        CurrentHumidity.innerHTML = `Humidity: ${val.current.humidity}%`;
        Currentprec_in.innerHTML = `Precipitation: ${val.current.precip_in}%`;
        CurrentWeatherspeed.innerHTML = `Wind Speed: ${val.current.wind_kph}km/h`;

        console.log(val);
      });
  });
