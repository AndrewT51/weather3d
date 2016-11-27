var React = require('react');
var ReactDOM = require('react-dom');

var Face = React.createClass({
  render: function(){
    var unitSymbol = '\u2109';
    var unit = 'fahrenheit';
    if(this.props.celsius){
      unitSymbol = '\u2103';
      unit = 'celsius'
    }
    var high = this.props.weather && this.props.weather.high && this.props.weather.high[unit] || ''
    var low = this.props.weather && this.props.weather.low  && this.props.weather.low[unit] || ''
    var bgImage = this.props.weather && this.props.weather.icon_url.replace(/com\/i\/c\/\w\//,'com/i/c/e/') || 'https://icons.wxug.com/i/c/e/chancerain.gif';
    return (
      <div className={'face ' + (this.props.side || 'backPanel')}
        style={{'backgroundImage': 'url("' + bgImage +'")'}}
      >
        <div className="cover">
          <h2 className="temperature">{this.props.weekday}</h2>
          <div className="temp-container">
            <p className="temperature temp-high">{ high + unitSymbol }</p>
            <p className="temperature temp-low">{ low + unitSymbol }</p>
          </div>
        </div>
      </div>

    )
  }
})

module.exports = Face;