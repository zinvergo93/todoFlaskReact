import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ChecklistItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checklistItem: ""
         }

        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick() {
        console.log("handelDeleteClick")
        // this.setState({
        //     checklistItem: ""
        // })
    }
    render() { 
        return ( 
            <div>
                <button>X</button>
                <p>{this.state.checklistItem}</p>
                <a className= "action-icon" onClick = {() => this.handleDeleteClick()}>
                    <FontAwesomeIcon icon="trash" />
                </a>
            </div>
        );
    }
}
 
export default ChecklistItem;