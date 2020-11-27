import React from "react"
import Container from "../components/container"
import Blogposts from "../components/blogposts"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

export default function Home() {
  return (
    <Container>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
            <Blogposts>
            </Blogposts>
          </>
        ) : (
            <>
              You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
          )}
      </p>

    </Container>
  )
}
