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
    // Format the input to separate city and country strings
    var location = this.props.logic.formatInput(this.state.value);
    // create url to request the autocompleted cities array
    var url1 = this.props.constants.urls.autoComplete(location.city,location.country)
    console.log('url1',url1)

    var location = this.props.logic.jsonp(url1, this.props.logic.getLocation, 'cb');
  

    // console.log(this.props.constants.urls.forecast10day(location))
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