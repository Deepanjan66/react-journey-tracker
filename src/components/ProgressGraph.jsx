import React, { Component } from 'react';
import Node from './Node';
import './ProgressGraph.css';

class ProgressGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            stages: [1,2,4,5,6,7]
        }
    }

    addIntermediaryEdge(index) {
        if ((index+1) < this.state.stages.length) return "intermediate";
        return "";
    }

    render() { 
        return (  
            <div className="progress-graph">
                {this.state.stages.map((currStage, index) => 
                    (<Node 
                        key={index}
                        stage={index+1} 
                        done={false}
                        intermediate={this.addIntermediaryEdge(index)}>
                        {currStage}
                    </Node>
                    )
                )}
            </div>
        );
    }
}
 
export default ProgressGraph;