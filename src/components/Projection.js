var React = require('react');
var ReactDOM = require('react-dom');

var Projection = React.createClass({

  render: function(){
    var weekAhead = this.props.weather && 
    this.props.weather.txt_forecast &&
    this.props.weather.txt_forecast.forecastday

    console.log('Weather', weekAhead)
    return (
      <div className="projection">
        <p >{weekAhead && weekAhead[0].fcttext}</p>
      </div>
    )
  }
})

module.exports = Projection;