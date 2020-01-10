import React from 'react';
import ServicesLinkData from './ServicesLinkData';
import PhaseCard from "./PhaseCard";



function LandingPage() {
    const phasesCard = ServicesLinkData[0].phases.map(phase => <PhaseCard key={phase.id} {...phase} />);

    const title = ServicesLinkData[0].title;
    return (
        <div id="phases">
            <div>
                <h2>{title}</h2>
            </div>
            <div className="card_wrapper">
                {phasesCard}
            </div>
        </div>
    );
}

export default LandingPage;