var React = require('react');
var ReactDOM = require('react-dom');

var InputLocation = React.createClass({
  getInitialState: function(){
    return {
      value: ''
    }
  },
  handleChange: function(evt){
    this.setState({
      value: evt.target.value
    })
  },
  handleClick: function(evt){
    var url = 'http://api.wunderground.com/api/dca680da44d3f5a3/conditions/q/CA/'+ this.state.value +'.json'
    // TODO - pass this.state.value to API request
    console.log(url)
    this.props.logic.jsonp(url, this.props.logic.handleApiResponse);
    this.setState({value:''})
  },
  render: function(){
    return (
      <div className="input-group col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <span className="input-group-btn">
            <button 
              className="btn btn-default" 
              onClick={this.handleClick} 
              type="button">
              Get forecast
            </button>
          </span>
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            className="form-control" 
            placeholder="Current location" 
          />
      </div>
    )
  }
})

module.exports = InputLocation;