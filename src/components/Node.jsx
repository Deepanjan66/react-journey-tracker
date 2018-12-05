import React, { Component } from 'react';
import './Node.css';

class Node extends Component {

    stateClass() {

        let styleClass = 'react_journey__node';
        if (this.props.intermediate.length > 0) 
            styleClass += ' ' + this.props.intermediate;
        
        if (this.props.done === true) 
            styleClass += ' react_journey__done';
        else if (this.props.current === true) 
            styleClass += ' react_journey__current';
        
        return styleClass;
    }

    render() { 
        return (
            <React.Fragment >
            <div className={this.stateClass()}>
                <a href="#">{this.props.stage}</a>
                <p>{this.props.children}</p>
            </div>
            </ React.Fragment >
        );
    }
}
 
export default Node;