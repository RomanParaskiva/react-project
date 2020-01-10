import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import Shop from "./Shop";

export function ServicesContent() {
    return(
        <main id="service_section">
            <div id="servicesContent">
                <Router>
                    <Switch>
                        <Route exact path='/services/LandingPage' component={LandingPage}/>
                        <Route exact path='/services/Shop' component={Shop}/>
                        <Redirect to='/services/LandingPage'/>
                    </Switch>
                </Router>
            </div>
    </main>
    )
}

