

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// API Variables
var currentApiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var unitsOfMeasure = "&units=imperial&appid=";
var futureApiURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
var uvIndex = document.getElementById("uv-index-value");
var lat;
var lon;

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

// Variables for 5 Day Forecast - Day 3
var futureDateThree = document.getElementById("cardThreeHeader");
var futureIconThree = document.getElementById("cardThreeIcon");
var futureTempThree = document.getElementById("cardThreeTemp");
var futureWindSpeedThree = document.getElementById("cardThreeWindSpeed");
var futureHumidityThree = document.getElementById("cardThreeHumidity");

// Variables for 5 Day Forecast - Day 4
var futureDateFour = document.getElementById("cardFourHeader");
var futureIconFour = document.getElementById("cardFourIcon");
var futureTempFour = document.getElementById("cardFourTemp");
var futureWindSpeedFour = document.getElementById("cardFourWindSpeed");
var futureHumidityFour = document.getElementById("cardFourHumidity");

// Variable for 5 Day Forecast - Day 5
var futureDateFive = document.getElementById("cardFiveHeader");
var futureIconFive = document.getElementById("cardFiveIcon");
var futureTempFive = document.getElementById("cardFiveTemp");
var futureWindSpeedFive = document.getElementById("cardFiveWindSpeed");
var futureHumidityFive = document.getElementById("cardFiveHumidity");

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
        lat = data.coord.lat;
        lon = data.coord.lon;
        console.log(lat);
        console.log(lon);


        // Instructions to populate specific elements with relevant data
        cityNow.innerText = name;
        iconNow.src = iconUrl + icon + ".png";
        descriptionNow.innerText = description;
        tempNow.innerText = temp + "° F";
        humidityNow.innerText = "Humidity: " + humidity + "%";
        windspeedNow.innerText = "Wind speed: " + speed + " MPH";

        
        futureWeatherOne.search()
        futureWeatherTwo.search()
        futureWeatherThree.search()
        futureWeatherFour.search()
        futureWeatherFive.search()
        uvI.fetchUVI()
        uvI.displayUVI()
    },
    search: function() {
        this.fetchWeather(document.getElementById("search-bar").value);
    },    
}

// UV Index Fetch Function

let uvI = {
    apiKey: "6a495eb658d2f860658cf774331a385d",

    fetchUVI: function() {
        console.log("hello");
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat="
            + lat 
            + "&lon="
            + lon
            + "&appid="
            + this.apiKey
        )
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((data) => {
                console.log(data);
                this.displayUVI(data);
            })
    },

    displayUVI: function(data) {
        const { uvi } = data.current;
        console.log(uvi);
        uvIndex.innerText = `UV Index: ${uvi}`;
    },

    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


//            //Color change depending on UV index
//         if (data.current.uvi < 2) {
//         uvIndex.setAttribute("class", "col-2 green");
//         } else if (data.current.uvi > 2 && data.current.uvi < 6) {
//         uvIndex.setAttribute("class", "col-2 yellow");
//         } else {
//         uvIndex.setAttribute("class", "col-2 red");
//         }
//         uvIndex.textContent = "UVI: ${data.current.uvi}";
//     });
// });

    search: function() {
        this.fetchWeather(document.getElementById("search-bar").value);
    },
}

// Function to populate Fayetteville weather when page loads initially
weather.fetchWeather("Fayetteville");


// Functions to call 5 Day Forecast

// Day 1
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

// Day 2
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
        const { dt_txt } = data.list[8];
        const { icon } = data.list[8].weather[0];
        const { temp } = data.list[8].main;
        const { speed } = data.list[8].wind;
        const { humidity } = data.list[8].main;

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

// Day 3
let futureWeatherThree = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeatherThree: function(city) {
        fetch(
            futureApiURL
            + city
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayFutureWeatherThree(data);
            })           
    },    
    // Display Future Weather Function
    displayFutureWeatherThree: function(data) {
        const { dt_txt } = data.list[16];
        const { icon } = data.list[16].weather[0];
        const { temp } = data.list[16].main;
        const { speed } = data.list[16].wind;
        const { humidity } = data.list[16].main;

        futureDateThree.innerText = dt_txt;
        futureIconThree.src = iconUrl + icon + ".png";
        futureTempThree.innerText = temp + "° F";
        futureWindSpeedThree.innerText = "Wind speed: " + speed + " MPH";
        futureHumidityThree.innerText = "Humidity: " + humidity + "%";
    },
    search: function() {
        this.fetchFutureWeatherThree(city.value);
    },    
};

// Day 4
let futureWeatherFour = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeatherFour: function(city) {
        fetch(
            futureApiURL
            + city
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayFutureWeatherFour(data);
            })           
    },    
    // Display Future Weather Function
    displayFutureWeatherFour: function(data) {
        const { dt_txt } = data.list[24];
        const { icon } = data.list[24].weather[0];
        const { temp } = data.list[24].main;
        const { speed } = data.list[24].wind;
        const { humidity } = data.list[24].main;

        futureDateFour.innerText = dt_txt;
        futureIconFour.src = iconUrl + icon + ".png";
        futureTempFour.innerText = temp + "° F";
        futureWindSpeedFour.innerText = "Wind speed: " + speed + " MPH";
        futureHumidityFour.innerText = "Humidity: " + humidity + "%";
    },
    search: function() {
        this.fetchFutureWeatherFour(city.value);
    },    
};

// Day 5
let futureWeatherFive = {
    apiKey: "6a495eb658d2f860658cf774331a385d",
    fetchFutureWeatherFive: function(city) {
        fetch(
            futureApiURL
            + city
            + unitsOfMeasure
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => {
                this.displayFutureWeatherFive(data);
            })           
    },    
    // Display Future Weather Function
    displayFutureWeatherFive: function(data) {
        const { dt_txt } = data.list[32];
        const { icon } = data.list[32].weather[0];
        const { temp } = data.list[32].main;
        const { speed } = data.list[32].wind;
        const { humidity } = data.list[32].main;

        futureDateFive.innerText = dt_txt;
        futureIconFive.src = iconUrl + icon + ".png";
        futureTempFive.innerText = temp + "° F";
        futureWindSpeedFive.innerText = "Wind speed: " + speed + " MPH";
        futureHumidityFive.innerText = "Humidity: " + humidity + "%";
    },
    search: function() {
        this.fetchFutureWeatherFive(city.value);
    },    
};


// Event Listener for Search Button upon Click
searchBtn.addEventListener("click", function() {
    weather.search();
    uvI.fetchUVI();
    uvI.displayUVI();
})

// Event Listener for Search Bar if user hits 'Enter' key
city.addEventListener("keyup", function(event) {
if (event.key == "Enter") {
    weather.search();
}
})
