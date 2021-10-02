var APIKey = "6a495eb658d2f860658cf774331a385d";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

api.openweathermap.org/data/2.5/weather?q=city&appid=APIKey


fetch(queryURL)

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// 5 day weather forecast API
// api.openweathermap.org/data/2.5/forecast/daily?q=city&cnt=5&appid=APIKey;

var searchBtn = document.getElementById("search-btn");

let weather = {
    "apiKey": "6a495eb658d2f860658cf774331a385d"
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Fayetteville&units=imperial&appid=6a495eb658d2f860658cf774331a385d"
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
};


