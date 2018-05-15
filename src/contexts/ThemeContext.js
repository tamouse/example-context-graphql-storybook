// just using the concept in the Context API docs
import React from "react"

export const ThemeContext = React.createContext({
  theme: "light",
  themeToggle: () => {},
})
