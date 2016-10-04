var React = require('react');
var ReactDOM = require('react-dom');

var Face = React.createClass({
  render: function(){
    var high = this.props.weather && this.props.weather.high && this.props.weather.high.celsius || ''
    var low = this.props.weather && this.props.weather.low  && this.props.weather.low.celsius || ''
    var bgImage = this.props.weather && this.props.weather.icon_url.replace(/com\/i\/c\/\w\//,'com/i/c/e/') || 'http://icons.wxug.com/i/c/e/chancerain.gif';
    return (
      <div className={'face ' + (this.props.side || 'backPanel')}
        style={{'backgroundImage': 'url("' + bgImage +'")'}}
      >
        <h2 className="temperature">{this.props.weekday}</h2>
        <p className="temperature">{'High: ' + high}</p>
        <p className="temperature">{'Low: ' + low}</p>
      </div>

    )
  }
})

module.exports = Face;