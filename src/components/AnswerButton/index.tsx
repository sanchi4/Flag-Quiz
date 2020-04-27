import React, { Component } from 'react'
import './AnswerButton.css'

interface props {
    code: string,
    text: string,
    handleClick: Function
}

class AnswerButton extends Component<props>{
    constructor(props:props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        return this.props.handleClick(this.props.code);
    }
    render() {
        return (
            <div className="AnswerButton">
                <button onClick={this.handleClick}>{this.props.text}</button>
            </div>
        );
    }
}
export default AnswerButton;