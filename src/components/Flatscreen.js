var React = require('react');
var ReactDOM= require('react-dom');
var Face = require('./Face')

var Flatscreen = React.createClass({
  render: function(){
    var forecast = this.props.weather &&
      this.props.weather.simpleforecast &&
      this.props.weather.simpleforecast.forecastday

    return (
      <div className="flatscreen">
        <Face 
          weather={forecast && forecast[5]}
        />
        <Face 
          weather={forecast && forecast[6]}
        />
        <Face 
          weather={forecast && forecast[7]}
        />
        <Face 
          weather={forecast && forecast[8]}
        />
    
      </div>  
    )
  }
})

module.exports = Flatscreen;