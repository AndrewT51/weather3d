var React = require('react');
var ReactDOM = require('react-dom');
var MenuBar = require('./MenuBar')
var PerspectiveContext = require('./PerspectiveContext')



var AppWindow = React.createClass({
  render: function(){
    function jsonp(url, callback) {
        var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
        window[callbackName] = function(data) {
            delete window[callbackName];
            document.body.removeChild(script);
            callback(data);
        };
        var script = document.createElement('script');
        script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
        document.body.appendChild(script);
    }
    jsonp('http://dfgfapi.wunderground.com/api/dca680da44d3f5a3/conditions/q/CA/San_Francisco.json'
, function(data) {
       console.log(data);
    });
    return (
      <div className="app-window">
        <MenuBar />
        <PerspectiveContext />
      </div>
    )
  }
})

module.exports = AppWindow
