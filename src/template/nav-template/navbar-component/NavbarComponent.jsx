import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class NavbarComponent extends Component {

    render() {
        return (
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">JobHunt</a>
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
