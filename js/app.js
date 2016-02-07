var React = require('react');

var Timer = React.createClass({
	getInitialState() {
		return {secondsElapsed: 0}
	},

	tick: function() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1})
	},

	componentDidMount: function() {
		this.interval = setInterval(this.tick, 1000);
	},

	render: function() {
		return (
			<div>
				<h3>It's the final countdown</h3>
				Seconds Elapsed: {this.state.secondsElapsed}
			</div>
		);
	}
});

React.render(<Timer />, document.getElementById('container'));

require('./login');