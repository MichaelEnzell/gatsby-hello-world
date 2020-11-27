import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import blogpostStyles from "./blogposts.module.css"

export default function Blogposts() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                author
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
      <h1 className={blogpostStyles.h1}>Blog posts</h1>
      <h4 className={blogpostStyles.h4}>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 className={blogpostStyles.h3}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{" "}
            <span className={blogpostStyles.date}>
              {" "}
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
