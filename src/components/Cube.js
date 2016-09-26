var React = require('react');
var ReactDOM = require('react-dom');
var Face = require('./Face')

var Cube = React.createClass({
  getInitialState: function(){
    return {
      sides: ['front','right', 'back', 'left','top']
    }
  },
  render: function(){
    var forecast = this.props.weather &&
      this.props.weather.simpleforecast &&
      this.props.weather.simpleforecast.forecastday
    var weekday = this.props.weather && 
     this.props.weather.txt_forecast &&
     this.props.weather.txt_forecast.forecastday
    console.log('------->',weekday)
    return (
      <div className="cube" style={{'transform': 'rotateY('+ this.props.cubeRotation +'deg)'
}}>
        <Face 
          side={this.state.sides[0]}
          weather={forecast && forecast[0]}
          weekday={weekday && weekday[0].title}
        />
        <Face 
          side={this.state.sides[1]}
          weather={forecast && forecast[1]}
          weekday={weekday && weekday[2].title}
        />
        <Face 
          side={this.state.sides[2]}
          weather={forecast && forecast[2]}
          weekday={weekday && weekday[4].title}
        />
        <Face 
          side={this.state.sides[3]}
          weather={forecast && forecast[3]}
          weekday={weekday && weekday[12].title}
        />
        <Face 
          side={this.state.sides[4]}
        />

      </div>
    )
  }
})

module.exports = Cube;