import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default function MyFiles({ data }) {
  return (
    <Container>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
/*
export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "pages" } }) {
      edges {
        node {
          name
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
*/