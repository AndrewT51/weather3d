var React = require('react');
var ReactDOM= require('react-dom');
var Face = require('./Face')

var Flatscreen = React.createClass({
  render: function(){
    var days = this.props.dayOrder 
    var forecast = this.props.weather &&
      this.props.weather.simpleforecast &&
      this.props.weather.simpleforecast.forecastday
    var weekday = this.props.weather && 
     this.props.weather.txt_forecast &&
     this.props.weather.txt_forecast.forecastday

    return (
      <div 
        className="flatscreen" 
        style={{ 'transform': 'translate3d('+ this.props.sliderPosition +'vw,0,-10vw)',
          'transition': 'transform ' + this.props.slideTime + 's'
        }}
      >

        <Face 
          weather={forecast && forecast[days[1]]}
          weekday={weekday && weekday[(days[1] * 2)].title}
        />
        <Face 
          weather={forecast && forecast[days[2]]}
          weekday={weekday && weekday[(days[2] * 2)].title}
        />
        <Face 
          weather={forecast && forecast[days[3]]}
          weekday={weekday && weekday[(days[3] * 2)].title}
        />
        <Face 
          weather={forecast && forecast[days[4]]}
          weekday={weekday && weekday[(days[4] * 2)].title}
        />
    
      </div>  
    )
  }
})

module.exports = Flatscreen;