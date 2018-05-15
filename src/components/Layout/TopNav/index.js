import React from "react"
import T from "prop-types"
import { Navbar } from "react-bootstrap"

export const TopNav = props => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Example-Context-GraphQL-Storybook</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)
