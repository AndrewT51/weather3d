var React = require('react');
var ReactDOM = require('react-dom');

var Projection = React.createClass({
  handleNext: function(){
    if(this.props.moving === true ) { return }
    this.props.rotate()
    this.props.slide()
  },
  handlePrev: function(){
    if(this.props.moving === true ) { return }
    this.setState({animationInMotion: true})
    this.props.rotate(true)
    this.props.slide(true)
  },

  render: function(){
    var weekAhead = this.props.weather && 
    this.props.weather.txt_forecast &&
    this.props.weather.txt_forecast.forecastday
    console.log(weekAhead)
    console.log(this.props.day)
    return (
      <div className={"projection " + (!weekAhead ? "hidden" : "")}>
        <div className="input-group changeday">
        <span className="input-group-btn">
          <button 
            onClick={this.props.switchUnits} 
            type="button"
            className="btn btn-secondary">
            { this.props.celsius ? '\u2109' : '\u2103'}
          </button>
          <button 
            onClick={this.handlePrev} 
            type="button"
            className="btn btn-secondary">
            <span className="fa fa-arrow-left"></span>
          </button>
          <button 
            onClick={this.handleNext} 
            type="button"
            className="btn btn-secondary">
            <span className="fa fa-arrow-right"></span>
          </button>
        </span>
        </div>
        <p >{weekAhead && weekAhead[this.props.day][this.props.celsius ? 'fcttext_metric' : 'fcttext']}</p>
      </div>
    )
  }
})

module.exports = Projection;