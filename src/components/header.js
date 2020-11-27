import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import headerStyles from "./header.module.css"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            homeLink
            aboutText
            aboutLink
            contactText
            contactLink
          }
        }
      }
    `
  )

  //console.log(data)

  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.headerTitleLink}>
        <h3 className={headerStyles.headerTitle}>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <ul className={headerStyles.headerList}>
        <ListLink to={data.site.siteMetadata.aboutLink}>{data.site.siteMetadata.aboutText}</ListLink>
        <ListLink to={data.site.siteMetadata.contactLink}>{data.site.siteMetadata.contactText}</ListLink>
      </ul>
    </header>
  )
}

const ListLink = props => (
  <li className={headerStyles.headerListItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
