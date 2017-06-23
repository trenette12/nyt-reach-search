var React = require("react");

var Results = React.createClass({
    render: function () {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center">Search Results</h3>
                    </div>
                    <div className="panel-body text-center">
                        <h1>Title:</h1>
                        <p>{this.props.title}</p>
                        <h2>URL: </h2>
                        <p>{this.props.url}</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Results;