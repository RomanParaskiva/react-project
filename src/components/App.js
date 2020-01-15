import React from 'react';
import '../css/App.css';
import Footer from './Footer/Footer';
import Header from "./Header/Header";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainContent from "./MainContent/MainContent";
import {ServicesContent} from "./ServicesContent/ServicesContent";
import {ContactsContent} from "./ContactsContent/ContactsContent";
import Menu from "./Menu/Menu";



const App = () => (
    <div className="App">
        <Menu/>
      <Header/>
        <div id="app_content">
            <Router>
                <Switch>
                    <Route exact path="/" component={MainContent} />
                    <Route path="/services" component={ServicesContent}/>
                    <Route path="/contacts" component={ContactsContent}/>
                    <Redirect to='/'/>
                </Switch>
            </Router>
        </div>
      <Footer />
    </div>
)

export default App;
