var React = require('react');
var ReactDOM= require('react-dom');
var Face = require('./Face')

var Flatscreen = React.createClass({
  faceList: function(fc, wd){
    var days = this.props.dayOrder 
    var list = []
      for (var i = 1; i <= 4; i ++){
        list.push(<Face 
          weather={fc && fc[days[i]]}
          weekday={wd && wd[(days[i] * 2)].title}
          key={i}
        />)
      }
    return list
  },
  render: function(){
    var days = this.props.dayOrder 
    try {
      var forecast = this.props.weather.simpleforecast.forecastday
      var weekday = this.props.weather.txt_forecast.forecastday 
    } catch (e){
      console.log(e)
    }
    return (
      <div 
        className={"flatscreen " + (!weekday ? "hidden" : "")}
        style={{ 'transform': 'translate3d('+ this.props.sliderPosition +'vw,0,-10vw)',
          'transition': 'transform ' + this.props.slideTime + 's'
        }}>
        {this.faceList(forecast,weekday)}    
      </div>  
    )
  }
})

module.exports = Flatscreen;