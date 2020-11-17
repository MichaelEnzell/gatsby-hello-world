import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import User from "../components/user"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Header headerText="Hello world!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe, globally known but literally unknown."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy."
      />
    </Container>
  )
}
