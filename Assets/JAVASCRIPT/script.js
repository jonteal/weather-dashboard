var APIKey = "6a495eb658d2f860658cf774331a385d";
var city;
var state;
var country;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

api.openweathermap.org/data/2.5/weather?q=city&appid=APIKey


fetch(queryURL)