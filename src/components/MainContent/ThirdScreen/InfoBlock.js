import React, {Component} from 'react';
import infoBlockBtnData from './infoBlockBtnData';
import BtnComponent from "./BtnComponent";

class InfoBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textMessage: "Нажимай на кнопки, чтобы узнать подробности"
        }
        this.showInfo = this.showInfo.bind(this);
    }
    showInfo(id){
        const newText = infoBlockBtnData[id].text;
        this.setState({
            textMessage: newText
        });
    }

    componentWillUnmount() {
    }

    render() {

        const buttonComps = infoBlockBtnData.map(btn => <BtnComponent key={btn.id} id={btn.id} onClick={this.showInfo.bind(this,btn.id)} text={btn.name}/>);
        return (

            <div className="info_block">
                <div className="info_btn_block">
                    {buttonComps}
                </div>
                <div className="info_text">
                    {this.state.textMessage}
                </div>
            </div>
        )
    }
}

export default InfoBlock;