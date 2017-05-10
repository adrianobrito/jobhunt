import React from 'react'
import NavbarComponent from './navbar-component/NavbarComponent'
import NavbarItem from './navbar-item/NavbarItem'
import './NavTemplate.css';

//#2A9D8F
const NavTemplate = () => (
    <NavbarComponent className="NavTemplate-container">
        <NavbarItem href="#" label="Colabore" />
        <NavbarItem href="#" label="Poste uma vaga" isFeatured="true"/>
    </NavbarComponent>
)

export default NavTemplate
