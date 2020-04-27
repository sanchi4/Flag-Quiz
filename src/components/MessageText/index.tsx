import React, { Component } from 'react';
import './MessageText.css';

interface MyProps {
    answerText:string,
    isAnswered?:boolean,
    isRight?:boolean
}

class MessageText extends Component<MyProps> {
    render(){
        return(
            <div className="MessageText">
            {(()=>{
                if(!this.props.isAnswered){
                    return <p className="Default">Q.What is the country name for this flag?</p>
                }
                else{
                    if(this.props.isRight){
                        return <p className="Right">Correct Answer!<br/>The correct answer was&nbsp;<span>{this.props.answerText}</span>&nbsp;</p>
                    }
                    else {
                        return <p className="Wrong">Wrong Answer!<br/>The correct answer was&nbsp;<span>{this.props.answerText}</span>&nbsp;</p>
                    }
                }

            })()}
            </div>
        );
    }
}

export default MessageText;