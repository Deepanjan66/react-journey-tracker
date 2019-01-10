import React, { Component } from 'react';
import './App.css';
import ProgressGraph from './components/ProgressGraph';

/** 
 * This component has been added to show an example
 * usage of the ProgressGraph component. This is not
 * part of the core journey tracker implementation
 */
class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        /** This should be used to keep track
         * of the stage the user is in
         */
        currStage: 1,
        /**
         * This array represents the name of the stages 
         * the user has to go through. ProgressGraph determines
         * the total number of stages from the size of this array
         */
        stages: [
            "Personal details", 
            "Education details", 
            "Previous experience",
            "Preferred department",
            "Preferred programming languages"
        ]
    };
  }

  /**
   * This handler must be supplied by the user
   * as the responsibility of telling ProgressGraph
   * about the current stage relies on this component
   * 
   * @param {boolean} progress - True if user has moved
   * to the next step; false if user moved to the previous
   * stage. 
   * 
   * This implementation should be adjusted according
   * to the needs of the project
   */
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
