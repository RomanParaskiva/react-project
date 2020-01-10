import React from 'react';
import ServicesLinkData from './ServicesLinkData';
import PhaseCart from "./PhaseCard";


function Shop() {
    const phasesCart = ServicesLinkData[1].phases.map(phase => <PhaseCart key={phase.id} {...phase} />);

    return(
        <div id="phases">
            {phasesCart}
        </div>
    );
}

export default Shop;