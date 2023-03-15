import React, { useContext } from 'react'
import { Container, Nav, Navbar  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { LanguageContext } from '../languages/language';
import './header.css'
export default function Header() {
  const {Language,setLanguage  } = useContext(LanguageContext);
  return (
    <Navbar   bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <NavLink className="m-3" to='/Home'>Home</NavLink>
            <NavLink className="m-3" to='/Moveis'>Moveis</NavLink>
            <NavLink className="m-3 " to="/favorite">Favorites</NavLink>
          </Nav>
          <span  onClick={()=>setLanguage((Language=='ar')?'en':'ar')}>{Language}</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
