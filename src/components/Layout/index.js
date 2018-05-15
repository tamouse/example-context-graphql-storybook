import React from "react"
import T from "prop-types"
import { Grid, Row, Col } from "react-bootstrap"
import { Sidebar } from "./Sidebar"
import { TopNav } from "./TopNav"

export class Layout extends React.Component {
  render() {
    return (
      <Grid fluid>
        <TopNav />
        <Row>
          <Col sm={3}>
            <Sidebar />
          </Col>
          <Col sm={9}>{this.props.children}</Col>
        </Row>
      </Grid>
    )
  }
}

export default Layout
