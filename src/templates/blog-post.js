import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <Container>
            <div>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }}>

                </div>
            </div>
        </Container>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`