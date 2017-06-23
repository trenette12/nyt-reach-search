var React = require("react");
var Results = require("./children/Results");
var Search = require("./children/Search");
var helpers = require("./utils/helpers");
var Link = require("react-router").Link;

var Main = React.createClass({
    getInitialState: function () {
        return { searchArticle: "", results: "" };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (prevState.searchArticle !== this.state.searchArticle) {
            alert("Your search query has been updated");
        }
        helpers.runQuery(this.state.searchArticle).then(function (data) {
            if (data !== this.state.results) {
                console.log(data);
                this.setState({ results: data });
            }
        }.bind(this));
    },
    setTerm: function (term) {
        this.setState({ searchArticle: term });
    },
    render: function () {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1>New York Times Article Scrubber</h1>
                        <p>Search for and Annotate Articles!</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Search setTerm={this.setTerm} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Results title={this.state.headline} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = Main;