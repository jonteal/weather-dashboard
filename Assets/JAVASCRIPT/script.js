

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// Variable for Search Button
var searchBtn = document.getElementById("search-btn");
var city = document.getElementById("search-bar");

// Date variables - Note that Numbers Correlate to Index Position
// var currentDate = moment().format('l');
// var futureDay0 = moment().add(1, 'days').format('l');
// var futureDay1 = moment().add(2, 'days').format('l');
// var futureDay2 = moment().add(3, 'days').format('l');
// var futureDay3 = moment().add(4, 'days').format('l');
// var futureDay4 = moment().add(5, 'days').format('l');


// Main function to call current weather
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

    // Inner function that displays the weather based on selected data
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        // Instructions to populate specific elements with relevant data
        document.getElementById("city").innerText = name;
        document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("description").innerText = description;
        document.getElementById("temp").innerText = temp + "° F";
        document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
        document.getElementById("wind").innerText = "Wind speed: " + speed + " MPH";
    },
    search: function() {
        this.fetchWeather(document.getElementById("search-bar").value);
    },
};



// Function to populate Fayetteville weather when page loads initially
// weather.fetchWeather("Fayetteville");

// Functiont to call 5 Day Forecast
let futureWeather = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=imperial&appid="
            + "6a495eb658d2f860658cf774331a385d"
        )
            .then((response) => response.json())
            .then((data) => this.displayFutureWeather(data));
    },
    

    // Display Future Weather Function
    displayFutureWeather: function(data) {
        // const { date } = data.list.dt_txt;
        const { icon } = data.list[0].weather[0].icon;
        const { temp } = data.list[0].main.temp;
        const { speed } = data.list[0].wind.speed;
        const { humidity} = data.list[0].main.humidity;


        // document.getElementById("cardOneHeader").innerText = date;
        document.getElementById("cardOneIcon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("cardOneTemp").innerText = temp + "° F";
        document.getElementById("cardOneWindSpeed").innerText = "Wind speed: " + speed + " MPH";
        document.getElementById("cardOneHumidity").innerText = "Humidity: " + humidity + "%";

    },
    search: function() {
        this.fetchFutureWeather(document.getElementById("search-bar").value);
    },
    
};

// Event Listener for Search Button upon Click
document.getElementById("search-btn").addEventListener("click", function() {
    weather.search();
    futureWeather.search();
})

// Event Listener for Search Bar if user hits 'Enter' key
document.getElementById("search-bar").addEventListener("keyup", function(event) {
if (event.key == "Enter") {
    weather.search();
    futureWeather.search();
}
})
