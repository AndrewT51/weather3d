var React = require('react');
var ReactDOM = require('react-dom');
var Face = require('./Face')

var Cube = React.createClass({
  getInitialState: function(){
    return {
      sides: ['front','right', 'back', 'left'],
    }
  },
  createFaceList: function(weekday, forecast){
    return this.state.sides.map(function(element, index){
      return ( 
        <Face 
          side={element}
          weather={forecast && forecast[this.props.cubeDays[index]]}
          weekday={weekday && weekday[(this.props.cubeDays[index] * 2)].title}
          key={index}
        />
      )
    }.bind(this))
  },

  render: function(){
    var days = this.props.dayOrder 
    try {
      var forecast = this.props.weather.simpleforecast.forecastday
      var weekday = this.props.weather.txt_forecast.forecastday
    } catch (e){
      console.log('Error:',e)
    }
    if(weekday){
      weekday[0].title = 'Today'
      weekday[2].title = 'Tomorrow'
    }
   
    return (
      <div 
        className={"cube " + (!forecast ? "hidden" : "")} 
        style={{
          'transform': 'rotateY('+ this.props.cubeRotation +'deg)',
          'transition': 'transform ' + this.props.slideTime + 's'
        }}
      >
        {this.createFaceList(weekday, forecast)}
        <Face side={'top'} />
      </div>
    )
  }
})

module.exports = Cube;