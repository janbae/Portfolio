import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/">PORTFOLIO</Nav.Link>
                  <Nav.Link href="/">ABOUT</Nav.Link>
                  <Nav.Link href="/">CONTACT</Nav.Link>
                </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>          
          {/* <Route render ={()=> < Home />} path="/" />
          <Route render ={()=> < Patients />} path="/patients" />
          <Route render ={()=> < BloodWorks />} path="/bloodworks" />
          <Route render ={()=> < Report />} path="/report" />
          <Route component={BloodWorksByPatient} path="/bloodwork/patient/:id" /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
