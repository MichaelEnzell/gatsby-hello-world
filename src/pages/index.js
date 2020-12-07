import React from "react"
import Container from "../components/container"
import Blogposts from "../components/blogposts"

export default function Home() {
  return (
    <Container>
      <div>
        <p>
          Hello and welcome to Michael Enzell's comprehensive guide on how to build a gingerbread house from scratch.
          In this guide you will find everything you need to know, from how to acquire your materials to what to do if you accidentally smash everything with a hammer.
        </p>
        <p>
          Hopefully you will find this guide both useful, informative and humorous. And remember: if it ain't broke don't fix it. If it is broken, a hammer might not be the solution.
        </p>
      </div>
      <hr></hr>
      <Blogposts>
      </Blogposts>
    </Container>
  )
}
