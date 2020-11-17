import React from "react"
import containerStyles from "./header.module.css"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header className={containerStyles.header}>
      <Link to="/" className={containerStyles.headerTitleLink}>
        <h3 className={containerStyles.headerTitle}>MySweetSite</h3>
      </Link>
      <ul className={containerStyles.headerList}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  )
}

const ListLink = props => (
    <li className={containerStyles.headerListItem}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )