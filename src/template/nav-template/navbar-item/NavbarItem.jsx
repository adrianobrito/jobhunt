import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';

class NavbarItem extends Component{

    render() {
        return (
            <NavItem href="{this.props.href}">{this.props.label}</NavItem>
        );
    }

}

export default NavbarItem
