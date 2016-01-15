var React = require('react');

var PhotoDisplay = React.createClass({
  render: function() {
    return (
      <div className="photoDisplay">
      <h6>Photo Display</h6>
      <img id="currentImage" />
      </div>
    );
  }, 
  componentDidMount: function() {
    debugger;
  }
});

module.exports = PhotoDisplay;