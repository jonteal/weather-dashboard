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
        document.getElementById("city").innerText = name;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("description").innerText = description;
        document.getElementById("temp").innerText = temp + "° F";
        document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
        document.getElementById("wind").innerText = "Wind speed: " + speed + "mph";
        document.getElementById("weather").classList.remove("loading");
    },
    search: function() {
        this.fetchWeather(document.getElementById("search-bar").value);
    },
};

document.getElementById("search-btn").addEventListener("click", function() {
        weather.search();
    })

document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Fayetteville");
