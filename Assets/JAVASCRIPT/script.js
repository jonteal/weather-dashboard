// var APIKey = "6a495eb658d2f860658cf774331a385d";
// var city;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// api.openweathermap.org/data/2.5/weather?q=city&appid=APIKey

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// 5 day weather forecast API
// api.openweathermap.org/data/2.5/forecast/daily?q=city&cnt=5&appid=APIKey;

var searchBtn = document.getElementById("search-btn");

let weather = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector("city").innerText = name;
        document.querySelector(".icon").src = 
            "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "° F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "mph";
    }
};


