import React from "react"
import { graphql } from "gatsby"
import H1 from "../components/h1"
import Container from "../components/container"

export default function About( { data }) {
  return (
    <Container>
      <H1 headerText="About" />
      <p>Metadata: {data.site.siteMetadata.title}</p>
      <p>Such wow. Very React.</p>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`