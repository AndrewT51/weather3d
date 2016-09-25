var Constants = {
  API_KEY: 'dca680da44d3f5a3',
  urls:{
    autoIp: function autoIp(){
      return 'http://api.wunderground.com/api/'+ Constants.API_KEY + '/geolookup/q/autoip.json'
    },
    autoComplete: function autoComplete(city, country){   
      return 'http://autocomplete.wunderground.com/aq?query=' + 
      city + (country ? '&c='+ country : '') +'&format=JSON'
    },
    geoLookup: function geoLookup(latLong){
      return 'http://api.wunderground.com/api/'+ Constants.API_KEY + '/geolookup/q/'+ latLong + '.json'
    },
    forecast10day: function forecast10day(location){
      return 'http://api.wunderground.com/api/'+ Constants.API_KEY + '/forecast10day/q/' + location + '.json'
    }
  }
}

module.exports = Constants;