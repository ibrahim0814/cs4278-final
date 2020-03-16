import React, { useContext, useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../static/sdj_logo.png"
import { AuthContext } from "../provider/AuthContext"

const Navigation = ({ pageName }) => {
  const { authUser } = useContext(AuthContext)
  const defaultLinks = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ]
  const loggedInLinks = [
    { name: "Profile", path: "/auth/profile" },
    { name: "Faiz-ul-Mawaid", path: "/auth/fmb" },
  ]

  const getLinks = links => {
    return links.map((link, index) => {
      return (
        <Nav.Link key={index} eventKey={link.name} as={Link} to={link.path}>
          {link.name}
        </Nav.Link>
      )
    })
  }

  return (
    <HeaderWrapper>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            // className="d-inline-block align-top"
            alt="San Digo Jamaat Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto" activeKey={pageName}>
            {authUser.valid ? getLinks(loggedInLinks) : getLinks(defaultLinks)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  img {
    width: 4.5rem;
    height: auto;
  }
`

export default Navigation
