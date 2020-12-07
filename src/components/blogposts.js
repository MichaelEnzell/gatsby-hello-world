import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import blogpostStyles from "./blogposts.module.css"

export default function Blogposts() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )

  //console.log(data)

  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 className={blogpostStyles.h3}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <p className={blogpostStyles.date}>
              {node.frontmatter.date}
            </p>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
