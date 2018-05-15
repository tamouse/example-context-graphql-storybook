import React from "react"
import Layout from "../Layout"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Level1 } from "../Level1"
import { Level2 } from "../Level2"
import { Switch } from "../Switch"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === "light" ? "dark" : "light",
      }))
    }

    this.state = {
      theme: "light",
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Layout>
          <h1>Hello, world</h1>
          <Level1>
            <Level2 />
            <Switch />
          </Level1>
        </Layout>
      </ThemeContext.Provider>
    )
  }
}

export default App
