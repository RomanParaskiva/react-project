import React from 'react';
import '../css/App.css';
import Footer from './Footer/Footer';
import Header from "./Header/Header";
import MenuBtn from "./MainContent/MenuBtn";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainContent from "./MainContent/MainContent";
import {ServicesContent} from "./ServicesContent/ServicesContent";
import {ContactsContent} from "./ContactsContent/ContactsContent";



const App = () => (
    <div className="App">
      <Header/>
        <Router>
            <Switch>
                <Route exact path="/" component={MainContent} />
                <Route path="/services" component={ServicesContent}/>
                <Route path="/contacts" component={ContactsContent}/>
                <Redirect to='/'/>
            </Switch>
        </Router>
      <Footer />
      <MenuBtn/>
    </div>
);
export default App;
