import React, { Component } from 'react';
import Node from './Node';
import './ProgressGraph.css';

class ProgressGraph extends Component {
    constructor(props) {
        super(props);
    }

    /** Add class for showing edge that will 
     * connect this node and the one after if
     * the current node is not the last node
     * 
     * @param {number} index - The index of the 
     * current node
     */
    addIntermediaryEdge(index) {
        if ((index+1) < this.props.stages.length) 
            return "react_journey__intermediate";
        return "";
    }

    /**
     * Checks if a node corresponds to the current
     * stage or not
     * 
     * @param {number} stage - nth step that the 
     * user is currently in 
     */
    isCurrent(stage) {
        if (stage === this.props.currStage) return true;
        return false;
    } 
    /**
     * Checks if the user has completed the step
     * corresponding to the stage-th node
     * 
     * @param {number} stage - nth step that the 
     * user is currently in 
     */
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