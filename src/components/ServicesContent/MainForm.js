import React from 'react';

class MainForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            amount: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCharge = this.handleCharge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCharge(event) {
        this.setState({value: event.target.value});
    }
    handleChange(event) {
        this.setState({amount: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.amount);
        event.preventDefault();
    }

   render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.amount} onChange={this.handleCharge} />
                </label>
                <select value={this.state.amount} onChange={this.handleChange}>
                    <option value=''></option>
                    <option value="1000">Грейпфрут</option>
                    <option value="2000">Лайм</option>
                    <option value="3000">Кокос</option>
                    <option value="5000">Манго</option>
                </select>
                <input type="submit" value="Отправить"/>
            </form>
        )
   }
}

export default MainForm;