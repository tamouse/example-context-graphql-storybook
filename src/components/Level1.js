import React from "react"
import { Panel } from "react-bootstrap"

export const Level1 = props => (
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
    </Panel.Heading>
    <Panel.Body>{props.children}</Panel.Body>
  </Panel>
)

export default Level1
