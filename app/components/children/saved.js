import React from 'react';

class Saved extends React.Component {
    getInitialState() {
        return {textfour: "", textfive: "", textsix:""};
     }
     handleChange(event) {
         var newState = {};
         newState[event.target.id] = event.target.value;
         this.setState(newState);
     }
    render () {
        return (
            <div>
                <h2>Topic</h2>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        value={this.state.textone}
                        className="form-control"
                        id="textfour"
                        onChange={this.handleChange}
                        required
                    />                    
                </div>
                <h2>Start Year</h2>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        value={this.state.textone}
                        className="form-control"
                        id="textfive"
                        onChange={this.handleChange}
                        required
                    />                    
                </div>
                <h2>End Year</h2>
                <div className="input-group input-group-lg">
                    <input
                        type="text"
                        value={this.state.textone}
                        className="form-control"
                        id="textsix"
                        onChange={this.handleChange}
                        required
                    />                
                </div>
            </div>
         );
    }
};