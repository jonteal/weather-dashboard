

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

var futureDateOne = document.getElementById("cardOneHeader");
var futureIconOne = document.getElementById("cardOneIcon");
var futureTempOne = document.getElementById("cardOneTemp");
var futureWindSpeedOne = document.getElementById("cardOneWindSpeed");
var futureHumidityOne = document.getElementById("cardOneHumidity");


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
let futureWeather = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeather: function(city) {
        fetch(
            futureApiURL
            + city
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayFutureWeather(data);
            })
            
    },
    

    // Display Future Weather Function
    displayFutureWeather: function(data) {
        const { dt_txt } = data.list[0];
        const { icon } = data.list[0].weather[0];
        const { temp } = data.list[0].main;
        const { speed } = data.list[0].wind;
        const { humidity} = data.list[0].main;


        futureDateOne.innerText = dt_txt;
        futureIconOne.src = iconUrl + icon + ".png";
        futureTempOne.innerText = temp + "° F";
        futureWindSpeedOne.innerText = "Wind speed: " + speed + " MPH";
        futureHumidityOne.innerText = "Humidity: " + humidity + "%";

    },
    search: function() {
        this.fetchFutureWeather(document.getElementById("search-bar").value);
    },
    
};

let futureWeather1 = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeather1: function(city) {
        fetch(
            futureApiURL
            + city
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayFutureWeather1(data);
            })
            
    },
    

    // Display Future Weather Function
    displayFutureWeather1: function(data) {
        const { dt_txt } = data.list[1];
        const { icon } = data.list[1].weather[1].icon;
        const { temp } = data.list[1].main;
        const { speed } = data.list[1].wind;
        const { humidity} = data.list[1].main;


        document.getElementById("cardTwoHeader").innerText = dt_txt;
        document.getElementById("cardTwoIcon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("cardTwoTemp").innerText = temp + "° F";
        document.getElementById("cardTwoWindSpeed").innerText = "Wind speed: " + speed + " MPH";
        document.getElementById("cardTwoHumidity").innerText = "Humidity: " + humidity + "%";


    },
    search: function() {
        this.fetchFutureWeather1(document.getElementById("search-bar").value);
    },
    
};







// Event Listener for Search Button upon Click
document.getElementById("search-btn").addEventListener("click", function() {
    weather.search();
})

// Event Listener for Search Bar if user hits 'Enter' key
document.getElementById("search-bar").addEventListener("keyup", function(event) {
if (event.key == "Enter") {
    weather.search();
    futureWeather.search();
}
})
