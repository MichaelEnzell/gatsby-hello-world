import React from "react"
import Header from "./header"
import NavBar from "./nav-bar"
import containerStyles from "./container.module.css"

export default function Container({ children }) {
  return (
    <div className={containerStyles.container}>
      <NavBar />
      <Header>
      </Header>
      {children}
    </div>
  )
}
