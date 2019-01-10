import React, { Component } from 'react';
import './Node.css';

class Node extends Component {

    /** 
     * Adds the relevant style classes to the 
     * current node 
     */
    stateClass() {
        // Set default style class to node
        let styleClass = 'react_journey__node';
        if (this.props.intermediate.length > 0) 
            // if this isn't the last node, add edge for the next node
            styleClass += ' ' + this.props.intermediate;

        if (this.props.done === true) 
            // if the user has finished this step,
            // show the node as done
            styleClass += ' react_journey__done';
        else if (this.props.current === true) 
            // Add the current class if the user is currently
            // in the step that is represented by this node
            styleClass += ' react_journey__current';
        
        return styleClass;
    }

    render() { 
        return (
            <div className={this.stateClass()}>
                <a href="#">{this.props.stage}</a>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
 
export default Node;