

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// API Variables
var currentApiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var unitsOfMeasure = "&units=imperial&appid=";
var futureApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

// Variable for Search Button
var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("search-bar");
var iconUrl = "http://openweathermap.org/img/wn/";

// Variables for Weather Data Items
var cityNow = document.getElementById("city");
var iconNow = document.getElementById("icon");
var descriptionNow = document.getElementById("description");
var tempNow = document.getElementById("temp");
var humidityNow = document.getElementById("humidity");
var windspeedNow = document.getElementById("wind");

// Variables for 5 Day Forecast - Day 1
var futureDateOne = document.getElementById("cardOneHeader");
var futureIconOne = document.getElementById("cardOneIcon");
var futureTempOne = document.getElementById("cardOneTemp");
var futureWindSpeedOne = document.getElementById("cardOneWindSpeed");
var futureHumidityOne = document.getElementById("cardOneHumidity");

// Variables for 5 Day Forecast - Day 2
var futureDateTwo = document.getElementById("cardTwoHeader");
var futureIconTwo = document.getElementById("cardTwoIcon");
var futureTempTwo = document.getElementById("cardTwoTemp");
var futureWindSpeedTwo = document.getElementById("cardTwoWindSpeed");
var futureHumidityTwo = document.getElementById("cardTwoHumidity");


// Main function to call current weather
let weather = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchWeather: function(city) {
        fetch(
            currentApiURL 
            + city 
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayWeather(data);
            })
    },

    // Inner function that displays the weather based on selected data
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        // Instructions to populate specific elements with relevant data
        cityNow.innerText = name;
        iconNow.src = iconUrl + icon + ".png";
        descriptionNow.innerText = description;
        tempNow.innerText = temp + "° F";
        humidityNow.innerText = "Humidity: " + humidity + "%";
        windspeedNow.innerText = "Wind speed: " + speed + " MPH";
    },
    search: function() {
        this.fetchWeather(document.getElementById("search-bar").value);
    },
};

// Function to populate Fayetteville weather when page loads initially
weather.fetchWeather("Fayetteville");



// Function to call 5 Day Forecast
let futureWeatherOne = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeatherOne: function(city) {
        fetch(
            futureApiURL
            + city
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayFutureWeatherOne(data);
            })           
    },
    
    // Display Future Weather Function
    displayFutureWeatherOne: function(data) {
        const { dt_txt } = data.list[0];
        const { icon } = data.list[0].weather[0];
        const { temp } = data.list[0].main;
        const { speed } = data.list[0].wind;
        const { humidity } = data.list[0].main;


        futureDateOne.innerText = dt_txt;
        futureIconOne.src = iconUrl + icon + ".png";
        futureTempOne.innerText = temp + "° F";
        futureWindSpeedOne.innerText = "Wind speed: " + speed + " MPH";
        futureHumidityOne.innerText = "Humidity: " + humidity + "%";

    },
    search: function() {
        this.fetchFutureWeatherOne(city.value);
    },    
};



let futureWeatherTwo = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeatherTwo: function(city) {
        fetch(
            futureApiURL
            + city
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayFutureWeatherTwo(data);
            })           
    },    
    // Display Future Weather Function
    displayFutureWeatherTwo: function(data) {
        const { dt_txt } = data.list[1];
        const { icon } = data.list[1].weather[1];
        const { temp } = data.list[1].main;
        const { speed } = data.list[1].wind;
        const { humidity } = data.list[1].main;

        futureDateTwo.innerText = dt_txt;
        futureIconTwo.src = iconUrl + icon + ".png";
        futureTempTwo.innerText = temp + "° F";
        futureWindSpeedTwo.innerText = "Wind speed: " + speed + " MPH";
        futureHumidityTwo.innerText = "Humidity: " + humidity + "%";
    },
    search: function() {
        this.fetchFutureWeatherTwo(city.value);
    },    
};





// Event Listener for Search Button upon Click
searchBtn.addEventListener("click", function() {
    weather.search();
    futureWeatherOne.search();
    futureWeatherTwo.search();
})

// Event Listener for Search Bar if user hits 'Enter' key
city.addEventListener("keyup", function(event) {
if (event.key == "Enter") {
    weather.search();
    futureWeatherOne.search();
    futureWeatherTwo.search();
}
})
