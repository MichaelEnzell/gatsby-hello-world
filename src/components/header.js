import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import containerStyles from "./header.module.css"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            homeText
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
  return (
    <header className={containerStyles.header}>
      <Link to="/" className={containerStyles.headerTitleLink}>
        <h3 className={containerStyles.headerTitle}>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <ul className={containerStyles.headerList}>
        <ListLink to={data.site.siteMetadata.homeLink}>{data.site.siteMetadata.homeText}</ListLink>
        <ListLink to={data.site.siteMetadata.aboutLink}>{data.site.siteMetadata.aboutText}</ListLink>
        <ListLink to={data.site.siteMetadata.contactLink}>{data.site.siteMetadata.contactText}</ListLink>
      </ul>
    </header>
  )
}

const ListLink = props => (
  <li className={containerStyles.headerListItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
