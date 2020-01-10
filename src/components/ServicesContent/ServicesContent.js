import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import Shop from "./Shop";
import ServicesLinkData from './ServicesLinkData';
import MenuLink from "../Header/MenuLink";


export function ServicesContent() {
    const servicesLinks = ServicesLinkData.map(link => <MenuLink key={link.id} {...link}/> );

    return(
    <main>
        <section id="service_section">
        <div className="menu">
            <div className="services_menu">
                {servicesLinks}
            </div>
        </div>
         <div className="content">
            <Router>
                <Switch>
                    <Route exact path="/services/LandingPage" component={LandingPage} />
                    <Route exact path="/services/shop" component={Shop} />
                    <Redirect to='/services/LandingPage'/>
                </Switch>
            </Router>
         </div>
        </section>
    </main>
    )
}

