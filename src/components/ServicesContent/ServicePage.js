import React from 'react';
import ServicesLinkData from './ServicesLinkData';
import PhaseCard from "./PhaseCard";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class ServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageData: {},
            phaseCard: '',
            chr: {},
            amount: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateData("https://swapi.co/api/people/1");
    }

    updateData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    chr: data
                })
            })
    }

    componentDidMount = (url) => {

        this.updateData(url);

        for (let i = 0; i < ServicesLinkData.length; i++) {
            if (ServicesLinkData[i].href === this.props.match.url) {
                this.setState({
                    pageData: ServicesLinkData[i]
                })
                this.setState({
                    phasesCard: ServicesLinkData[i].phases.map(phase => <PhaseCard key={phase.id} {...phase} />)
                });

            }
        }
    }

    handleChange(event) {

        this.setState({
            amount: event.target.value
        })
    }

    render() {
        console.log(this.state.pageData);

        return (
            <div id="phases">
                <h2>{this.state.pageData.title}</h2>
                <h3>Этапы создания:</h3>
                <div className="card_wrapper">
                    {this.state.phasesCard}
                </div>

                <h2>Отправить заявку на {this.state.pageData.title}</h2>

                <form>

                    <h3>Стоимость : {this.state.amount}</h3> <input type="submit" value="Отправить"/>
                    <FormControlLabel control={
                        <Checkbox name={this.state.pageData.formdata} value={this.state.pageData.formdata}
                                  onChange={this.handleChange}/>
                    } label={this.state.chr.name}
                    />
                </form>

            </div>
        );
    }

}

export default ServicePage;