var Constants = {
  apiKey: 'dca680da44d3f5a3',
  urls:{
    autoIp: function autoIp(){
      'http://api.wunderground.com/api/'+ Constants.apiKey + '/geolookup/q/autoip.json'
    },
    autoComplete: function autoComplete(city, country){   
      return 'http://autocomplete.wunderground.com/aq?query=' + 
      city + (country ? '&c='+ country : '') +'&format=JSON'
    },
    geoLookup: function geoLookup(latLong){
      return 'http://api.wunderground.com/api/'+ Constants.apiKey + '/geolookup/q/'+ latLong + '.json'
    },
    forecast10day: function forecast10day(location){
      return 'http://api.wunderground.com/api/'+ Constants.apiKey + '/forecast10day/q/' + location + '.json'
    }
  }
}

module.exports = Constants;