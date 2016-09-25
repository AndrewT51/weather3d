var React = require('react');
var ReactDOM = require('react-dom');

var InputLocation = React.createClass({
  getInitialState: function(){
    return {
      value: ''
    }
  },
  autoLocateIP: function autoLocateIP(){
    var url = this.props.constants.urls.autoIp()
    console.log('url', url)
    this.props.jsonp.jsonp(url, 'callback', this.props.autoLocateIP)
  },
  handleChange: function(evt){
    this.setState({
      value: evt.target.value
    })
  },
  handleClick: function(evt){
    var jsonp = this.props.jsonp,
        userInput = this.props.format(this.state.value),
        url1 = this.props.constants.urls.autoComplete(userInput.city,userInput.country);

    jsonp.jsonp(url1, 'cb', this.props.getLocation);
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
          <span className="input-group-btn">
            <button 
              className="btn btn-default"
              onClick={this.autoLocateIP}
              type="button">
              <span className="fa fa-location-arrow"></span>
            </button>
          </span>
      </div>
    )
  }
})

module.exports = InputLocation;