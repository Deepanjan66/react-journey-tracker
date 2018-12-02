import React, { Component } from 'react';
import './Node.css';

class Node extends Component {

    stateClass() {
        let styleClass = 'node';
        if (this.props.intermediate.length > 0) 
            styleClass += ' ' + this.props.intermediate;
        if (this.props.done === true) 
            styleClass += ' done';
        return styleClass;
    }

    render() { 
        return (
            <div className={this.stateClass()}>
                <a href="#">{this.props.children}</a>
            </div>
        );
    }
}
 
export default Node;