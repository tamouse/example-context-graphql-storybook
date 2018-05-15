import React from "react"
import { Grid, Row, Col } from "react-bootstrap"
import { ThemeContext } from "../contexts/ThemeContext"

export const Level2 = props => (
  <Grid>
    <Row>
      <Col sm={8} smOffset={2}>
        <ThemeContext.Consumer>
          {({ theme }) => <p>Theme is: {theme}</p>}
        </ThemeContext.Consumer>
      </Col>
    </Row>
  </Grid>
)
