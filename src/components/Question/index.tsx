import React,{ Component} from 'react';
import './Question.css'
import AnswerButton from '../AnswerButton'
import MessageText from '../MessageText'
import { Country } from '../../interfaces/Country'

interface Props{
    enable:boolean,
    answer:number,
    candidates:Array<Country>,
    answerResponse:Function
}

interface States{
    isRight?:boolean
}

class Question extends Component<Props,States>{
    constructor(props:Props){
        super(props);
        this.state = { isRight:false };
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(code:string){
        if(this.props.enable){
            var right = this.props.candidates[this.props.answer].code===code;
            this.setState({ isRight:right});
            this.props.answerResponse(right);
        }
    }
    render() {
        return(
            <div className = "Question">
                <img src = { 'images/flags/'+this.props.candidates[this.props.answer].english+'.png'} alt='flag'></img>
                <MessageText answerText={this.props.candidates[this.props.answer].english} isAnswered={!this.props.enable} isRight={this.state.isRight}/>
                {this.props.candidates.map((v, index) => (
                    <AnswerButton key={index} code={v.code} text={v.english} handleClick={this.handleClick} />
                ))}
            </div>
        );
    }

}
export default Question;
