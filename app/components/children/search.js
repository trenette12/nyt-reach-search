import React from 'react';

class Search extends React.Component{
    getInitialState() {
        return {textone: "", texttwo: "", textthree:""};
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
                        id="textone"
                        onChange={this.handleChange}
                        required
                     />                   
                </div>
            </div>
        );
    }
};
