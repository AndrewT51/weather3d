var React = require('react');
var ReactDOM = require('react-dom');
var MenuBar = require('./MenuBar')
var PerspectiveContext = require('./PerspectiveContext')
var jsonp = require('../logic');

var AppWindow = React.createClass({
  getInitialState: function(){
    return {
      forecast:{},
      cubeRotation:0, 
      sliderPosition: 0,
      dayOrder: [0,1,2,3,4,5,6],
      slideTime: 2
    }
  },
  getLocation: function getLocation(data){
      console.log('DATA:',data)
      var locationData = data && data.RESULTS && data.RESULTS[0];
      if(!locationData){
          return
      }
      var city = locationData.name.replace(/,.+/,'').replace(/ /,'_');
      console.log('City',city)
      var latLong = locationData.ll.replace(/ /,',')
      var country = locationData.name.replace(/.+,/,'').trim().replace(/ /,'_') || locationData.c;
      console.log(locationData)
      console.log(city + ' ' + country);
      var location = country + '/' + city;
      if(country.toUpperCase() === 'US'){
          var url = Constants.urls.geoLookup(latLong)
          return jsonp.jsonp(url, 'callback', this.getStateAcronym )
      }
      this.get10dayForecast(location)     
  },

  autoLocateIP: function autoLocateIP(data){
    console.log("AUTOIP:", data)
    var nearestWeatherStation = data.location &&
      data.location.nearby_weather_stations &&
      data.location.nearby_weather_stations.pws &&
      data.location.nearby_weather_stations.pws.station &&
      data.location.nearby_weather_stations.pws.station[0];
    console.log(nearestWeatherStation)
    var url = this.props.constants.urls.autoComplete(nearestWeatherStation.city,nearestWeatherStation.country);
    jsonp.jsonp(url, 'cb', this.getLocation);

  },

  forecastData: function forecastData(data){
      console.log('Data:', data.forecast)
      this.setState({
        forecast: data.forecast
      })
      // PerspectiveContext.updateComponent
  },

  get10dayForecast: function get10dayForecast(location){
      var url = this.props.constants.urls.forecast10day(location)
      console.log('URL: ', url)
      jsonp.jsonp(url, 'callback', this.forecastData )
  },

  getStateAcronym: function getStateAcronym(data){
      var state = data.location.state
      var location = state + '/' + data.location.city.replace(/ /,'_')
      this.get10dayForecast(location)
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
  },

  rotate: function(clockwise){
    var degrees = clockwise ? 90 : -90,
        tempArr = [].concat(this.state.dayOrder),
        element;
    setTimeout(function(){
      if(clockwise){
        degrees = 90
        element = tempArr.pop();
        tempArr.unshift(element)
        this.slide()
      }else{
        degrees = -90
        element = tempArr.shift();
        tempArr.push(element)
        this.slide(true)
      }
      this.setState({
        dayOrder: tempArr,
        slideTime: 0
      })
    }.bind(this),2000)
    
    this.setState({
      cubeRotation: this.state.cubeRotation + degrees,
      slideTime: 2
    })
  },

  slide: function(moveRight){
    var position = moveRight ? 20 : -20
    this.setState({
      sliderPosition: this.state.sliderPosition + position
    })
  },

  render: function(){
  
    return (
      <div className="app-window">
        <MenuBar 
          format={this.formatInput}
          jsonp={jsonp}
          getLocation={this.getLocation}
          autoLocateIP={this.autoLocateIP}
          constants={this.props.constants} 
          rotate={this.rotate}
          slide={this.slide}
        />
        <PerspectiveContext
          dayOrder={this.state.dayOrder}
          cubeRotation={this.state.cubeRotation}
          sliderPosition={this.state.sliderPosition}
          forecast={this.state.forecast} 
          slideTime={this.state.slideTime}
        />
      </div>
    )
  }
})

module.exports = AppWindow
