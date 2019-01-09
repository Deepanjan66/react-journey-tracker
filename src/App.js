import React, { Component } from 'react';
import './App.css';
import ProgressGraph from './components/ProgressGraph';

class App extends Component {


  constructor (props) {
    super(props);
    this.state = {
        currStage: 1,
        stages: [
            "Personal details", 
            "Education details", 
            "Previous experience",
            "Preferred department",
            "Preferred programming languages"
        ]
    };
  }


  handleStageChange = (progress) => {
    const currStage = this.state.currStage;
    if (progress === true) {
        if (currStage > this.state.stages.length) return;
        this.setState({currStage: currStage + 1});
    } else {
        if (currStage <= 1) return;
        this.setState({currStage: currStage - 1});
    }
  };

  render() {
    return (
      <div className="App">
        <ProgressGraph  stages={this.state.stages}
                        currStage={this.state.currStage}
                        />
        <input value="Previous" className="custom__button custom__red" type="button" onClick={() => this.handleStageChange(false)}/>
        <input value="Next" className="custom__button custom__green" type="button" onClick={() => this.handleStageChange(true)}/>
      </div>
    );
  }
}

export default App;
