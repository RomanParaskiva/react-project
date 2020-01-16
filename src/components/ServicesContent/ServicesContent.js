import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import ServicePage from "./ServicePage";

export function ServicesContent() {
    return(
        <main id="service_section">
            <div id="servicesContent">
                <Router>
                    <Switch>
                        <Route exact path='/services/:pageId' component={ServicePage}/>
                        <Redirect to='/services/LandingPage'/>
                    </Switch>
                </Router>
            </div>
    </main>
    )
}

