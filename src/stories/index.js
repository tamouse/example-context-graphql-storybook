import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { Level2 } from "../components/Level2"
import { Switch } from "../components/Switch"
import { ThemeContext } from "../contexts/ThemeContext"

storiesOf("Level2", module).add("with Context", () => (
  <ThemeContext.Provider
    value={{ theme: "light", toggleTheme: action("toggleTheme") }}
  >
    <Level2 />
  </ThemeContext.Provider>
))

storiesOf("Switch", module).add("with Context", () => (
  <ThemeContext.Provider
    value={{ theme: "light", toggleTheme: action("toggleTheme") }}
  >
    <Switch />
  </ThemeContext.Provider>
))
