import React from 'react';
import ServicesLinkData from './ServicesLinkData';
import PhaseCard from "./PhaseCard";


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageId: '',
            phasesCard: '',
            title: '',
        }
        this.componentDidMount();
    }

    componentDidMount() {
        for (let i = 0; i < ServicesLinkData.length; i++) {

            if (ServicesLinkData[i].href !== this.props.match.url) {
                //this.setState({title: JSON.stringify(this.props)});
            } else {
                this.setState({
                    phasesCard: ServicesLinkData[i].phases.map(phase => <PhaseCard key={phase.id} {...phase} />)
                });

                this.setState({title: ServicesLinkData[i].title});
            }
        }
    }


    render() {


        return (
            <div id="phases">
                <div>
                    <h2>{this.state.title}</h2>
                </div>
                <div className="card_wrapper">
                    {this.state.phasesCard}
                </div>
            </div>
        );
    }


}

export default LandingPage;