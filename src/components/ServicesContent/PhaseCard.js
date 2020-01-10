import React from 'react';

export default function PhaseCard(props) {

    return (
        <div className="phases_cart">
            <h3>
                {props.title}
            </h3>
            <p>
                {props.text}
            </p>

        </div>
    );
}