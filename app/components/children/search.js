var React = require("react");

var Search = React.createClass ({
    // constructor();
    // super();
    getInitialState() {
        return { textone: "", texttwo: "", textthree: "" };
    },
    handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleSubmit(event){
        event.preventDefault();
        this.props.setTerm(this.state.term);
        this.setState("");
    },
    render() {
        return (
            <div>
            <h1>Search</h1>
                <h2>Topic</h2>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        value={this.state.textone}
                        className="form-control"
                        id="textone"
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <h2>Start Year</h2>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        value={this.state.texttwo}
                        className="form-control"
                        id="texttwo"
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <h2>End Year</h2>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        value={this.state.textthree}
                        className="form-control"
                        id="textthree"
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <br />
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmit}
                >
                Search Articles
              </button>
              <br /><br />
            </div>
        )}
    });


module.exports = Search;