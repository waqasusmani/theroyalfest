import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';





const Home = () => {
    return (
        <div id="home">
            <h1 id="home-heading">The Royal Fest</h1>
            <p className="home-para">Hosting an event?</p>
            <p className="home-para">Want to offer something exclusive to your guests?</p>
            <p id = "one-stop-solution-para" className="home-para">Enjoy the exclusive customer experience perfectly suiting your needs !</p>
            <div id="offers-home">
            <p id="we-offer">We offer:</p>
            <ul style={{margin:0}}>
                <li className="offers-list">Complete <Router><Link id="events-link-in-home" className="links" to="/eventmanagement" target="_blank">Event Setup</Link></Router> (Marriages, concerts, limited guests parties etc.)</li>
                <li className="offers-list">Catering (see our <Router><Link id="catering-link-in-home" className="links" to="/catering" target="_blank">Catering</Link></Router>  section)</li>
                <li className="offers-list">Videography/ Photography</li>
                <li className="offers-list"><Router><Link id="cafeteria-link-in-home" className="links" to="/cafeteria" target="_blank">Cafeteria Services</Link></Router></li>
            </ul>
            </div>
            
        </div>
    )
}

export default Home