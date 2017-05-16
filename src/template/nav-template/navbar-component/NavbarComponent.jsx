import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavbarComponent.css'

class NavbarComponent extends Component {

    render() {
        return (
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#" className="brand">JobHunt</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                    {this.props.children}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default NavbarComponent
