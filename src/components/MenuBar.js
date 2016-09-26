var React = require('react');
var ReactDOM = require('react-dom');
var InputLocation = require('./InputLocation')

var MenuBar = React.createClass({
  handleNext: function(){
    this.props.rotate()
    this.props.slide()
  },
  handlePrev: function(){
    this.props.rotate(true)
    this.props.slide(true)
  },
  render: function(){
    return (
      <div className="menubar clearfix">
        <InputLocation
          format={this.props.format} 
          jsonp={this.props.jsonp} 
          autoLocateIP={this.props.autoLocateIP}
          getLocation={this.props.getLocation}
          constants={this.props.constants}
        />
        <button onClick={this.handleNext} >Next</button>
        <button onClick={this.handlePrev} >Prev</button>
      </div>
    )
  }
})


module.exports = MenuBar;