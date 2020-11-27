import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
                title
                date(formatString: "DD MMMM, YYYY")
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
      <h4 className={blogpostStyles.h4}>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 className={blogpostStyles.h3}>
            {node.frontmatter.title}{" "}
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
