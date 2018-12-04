import React, { Component } from 'react';
import './Node.css';

class Node extends Component {

    stateClass() {

        console.log(this.props.stage + " " + this.props.current);
        let styleClass = 'node';
        if (this.props.intermediate.length > 0) 
            styleClass += ' ' + this.props.intermediate;
        
        if (this.props.done === true) 
            styleClass += ' done';
        else if (this.props.current === true) 
            styleClass += ' current';
        
        return styleClass;
    }

    render() { 
        return (
            <div className={this.stateClass()}>
                <a href="#">{this.props.stage}</a>
            </div>

        );
    }
}
 
export default Node;