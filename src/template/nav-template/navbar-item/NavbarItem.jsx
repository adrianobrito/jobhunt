import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import './NavbarItem.css';

class NavbarItem extends Component{

    render() {
    	var featuredClass = this.props.isFeatured ? 'NavbarItem-featured' : '';

        return (
            <NavItem href="{this.props.href}" className={featuredClass}>{this.props.label}</NavItem>
        );
    }

}

export default NavbarItem
