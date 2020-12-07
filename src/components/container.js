import React from "react"
import Header from "./header"
import containerStyles from "./container.module.css"

export default function Container({ children }) {
  return (
    <div className={containerStyles.container}>
      <Header></Header>
      {children}
    </div>
  )
}
