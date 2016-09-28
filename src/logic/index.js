var Constants = require('../Constants')
var logic = {

    jsonp: function jsonp(url, cbName, callback ) {
        // console.log('CALLBACK:',callback)
        var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
        window[callbackName] = function(data) {
            delete window[callbackName];
            document.body.removeChild(script);
            callback(data);
        };
        var script = document.createElement('script');
        script.src = url + (~url.indexOf('?') ? '&' : '?') + cbName + '=' + callbackName;
       
        document.body.appendChild(script);
    },

    getLocation: function getLocation(data){
        var locationData = data && data.RESULTS && data.RESULTS[0];
        if(!locationData){
            return
        }
        var city = locationData.name.replace(/,.+/,'').replace(/ /,'_');
        // console.log('City',city)
        var latLong = locationData.ll.replace(/ /,',')
        var country = locationData.name.replace(/.+,/,'').trim().replace(/ /,'_') || locationData.c;
        // console.log(locationData)
        console.log(city + ' ' + country);
        var location = country + '/' + city;
        if(country.toUpperCase() === 'US'){
            var url = Constants.urls.geoLookup(latLong)
            return logic.jsonp(url, 'callback', logic.getStateAcronym )
        }
        logic.get10dayForecast(location)
        
    },

    autoLocate: function autoLocate(data){
        console.log(data)
    },

    forecastData: function forecastData(data){
        console.log('Data:', data)
    },

    get10dayForecast: function get10dayForecast(location){
        var url = Constants.urls.forecast10day(location)
        // console.log('URL: ', url)
        logic.jsonp(url, 'callback', logic.forecastData )
    },

    getStateAcronym: function getStateAcronym(data){
        var state = data.location.state
        var location = state + '/' + data.location.city.replace(/ /,'_')
        logic.get10dayForecast(location)
    },

    formatInput: function formatInput(input){
        var country;
        var splitInput = input.split(',');
        if (splitInput.length > 1){
            country = splitInput[1].trim().toUpperCase()
        }
        var city = splitInput[0].trim();
        return {
            city: city,
            country: country
        }
    }


}

module.exports = logic


