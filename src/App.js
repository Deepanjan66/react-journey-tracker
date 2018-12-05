import React, { Component } from 'react';
import './App.css';
import ProgressGraph from './components/ProgressGraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressGraph stages={[
                                "Personal details", 
                                "Education details", 
                                "Previous experience",
                                "Preferred department",
                                "Preferred programming languages"
                            ]}/>
      </div>
    );
  }
}

export default App;
