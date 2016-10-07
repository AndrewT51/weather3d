var React = require('react');
var ReactDOM = require('react-dom');
var MenuBar = require('./MenuBar')
var PerspectiveContext = require('./PerspectiveContext')
var LocationPanel = require('./LocationPanel')
var jsonp = require('../logic');

var AppWindow = React.createClass({
  getInitialState: function(){
    return {
      forecast:{},
      cubeRotation:0, 
      sliderPosition: 0,
      dayOrder: [0,6,5,4,3,2,1],
      cubeDays: [0,1,2,6],
      faceChangePointer: 2,
      slideTime: 1,
      location: '',
      moving: false,
      loaded: false,
      celsius: true
    }
  },
  getLocation: function getLocation(data){
      var locationData = data && data.RESULTS && data.RESULTS[0];
      if(!locationData){
          return
      }
      var city = locationData.name.replace(/,.+/,'').replace(/ /g,'_');
      var latLong = locationData.ll.replace(/ /,',')
      var country = locationData.name.replace(/.+,/,'').trim().replace(/ /g,'_') || locationData.c;
      var location = country + '/' + city;
      if(country.toUpperCase() === 'US'){
          var url = Constants.urls.geoLookup(latLong)
          return jsonp.jsonp(url, 'callback', this.getStateAcronym )
      }
      this.setState({location: city.replace(/_/g,' ') + ', ' + country.replace(/_/g,' ')})
      this.get10dayForecast(location)     
  },

  autoLocateIP: function autoLocateIP(data){
    this.setState({loaded: false})
    try {
      var nearestWeatherStation = data.location.nearby_weather_stations.pws.station[0];
    } catch (e){
      console.log(e)
    }
    var url = this.props.constants.urls.autoComplete(nearestWeatherStation.city,nearestWeatherStation.country);
    jsonp.jsonp(url, 'cb', this.getLocation);
  },

  forecastData: function forecastData(data){
    console.log(data.forecast)
      this.setState({
        forecast: data.forecast,
        loaded:true
      })
  },

  get10dayForecast: function get10dayForecast(location){
      this.setState({loaded: false})
      var url = this.props.constants.urls.forecast10day(location)
      jsonp.jsonp(url, 'callback', this.forecastData )
  },

  getStateAcronym: function getStateAcronym(data){
      this.setState({location: data.location.city.replace(/_/g,' ') + ', ' + data.location.state.replace(/_/g,' ')})
      var state = data.location.state
      var location = state + '/' + data.location.city.replace(/ /g,'_')
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
    console.log('Day:',this.state.dayOrder[0])
    var degrees = clockwise ? 90 : -90,
        tempArr = this.state.dayOrder.slice(),
        pointer = this.state.faceChangePointer,
        cubeDays = this.state.cubeDays.slice(),
        element;
    if(!clockwise){
      // first calculate the face we need to take the value of
      var faceToRightVal = cubeDays[(pointer > 0 ? pointer - 1 : 3 )]
      cubeDays[pointer] = faceToRightVal > 5 ? 0 : faceToRightVal + 1
      pointer = pointer === 3 ? 0 : pointer + 1;
    }else{
      var faceToLeftVal = cubeDays[(pointer < 3 ? pointer + 1 : 0 )]
      cubeDays[pointer] = faceToLeftVal < 1 ? 6 : faceToLeftVal - 1
      pointer = pointer === 0 ? 3 : pointer - 1;
    }
    this.setState({faceChangePointer: pointer})
    this.setState({cubeDays: cubeDays})
    setTimeout(function(){
      if(clockwise){
        degrees = 90
        element = tempArr.shift();
        tempArr.push(element)
        this.slide()
      }else{
        degrees = -90
        element = tempArr.pop();
        tempArr.unshift(element)
        this.slide(true)
      }
      this.setState({
        dayOrder: tempArr,
        slideTime: 0,
        moving: false
      })
    }.bind(this), this.state.slideTime ? this.state.slideTime * 1000 : 1000)
    this.setState({
      cubeRotation: this.state.cubeRotation + degrees,
      slideTime: 1,
      moving: true
    })
  },

  slide: function(moveRight){
    var position = moveRight ? -20 : 20
    this.setState({
      sliderPosition: this.state.sliderPosition + position
    })
  },

  switchUnits: function(){
    this.setState({ celsius: !this.state.celsius })
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
        />
        <PerspectiveContext
          moving={this.state.moving}
          loaded={this.state.loaded}
          cubeDays={this.state.cubeDays}
          dayOrder={this.state.dayOrder}
          cubeRotation={this.state.cubeRotation}
          sliderPosition={this.state.sliderPosition}
          forecast={this.state.forecast} 
          slideTime={this.state.slideTime}
          rotate={this.rotate}
          slide={this.slide}
          celsius={this.state.celsius}
          switchUnits={this.switchUnits}
        />
        <LocationPanel 
          loaded={this.state.loaded}
          location={this.state.location}
        />
      </div>
    )
  }
})

module.exports = AppWindow
