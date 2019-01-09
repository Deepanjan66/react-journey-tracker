import React, { Component } from 'react';
import Node from './Node';
import './ProgressGraph.css';

// Color the node that is the current node
// Color nodes that have been completed
// 

class ProgressGraph extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // Used to keep track of the stage
        //     // the user is currently at
        //     currentStage: 3
        // }
    }

    addIntermediaryEdge(index) {
        if ((index+1) < this.props.stages.length) return "react_journey__intermediate";
        return "";
    }

    // handleStageChange() {
    //     this.setState({currentStage: this.state.currentStage + 1});
    // }

    isCurrent(stage) {
        if (stage === this.props.currStage) return true;
        return false;
    } 

    isDone(stage) {
        if (stage < this.props.currStage) return true;
        return false;
    }

    render() { 
        return (  
            <div className="react_journey__progress-graph">
                {this.props.stages.map((stage, index) => 
                    (<Node 
                        key={index}
                        stage={index+1} 
                        done={this.isDone(index + 1)}
                        current={this.isCurrent(index + 1)}
                        intermediate={this.addIntermediaryEdge(index)}>
                        {stage}
                    </Node>
                    )
                )}
            </div>
        );
    }
}
 
export default ProgressGraph;