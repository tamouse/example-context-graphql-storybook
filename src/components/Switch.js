import React from "react"
import { Button } from "react-bootstrap"
import { ThemeContext } from "../contexts/ThemeContext"

export const Switch = props => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => <Button onClick={toggleTheme}>toggle</Button>}
  </ThemeContext.Consumer>
)

export default Switch
