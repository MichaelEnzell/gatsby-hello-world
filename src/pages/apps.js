import React from "react"
import { Router } from "@reach/router"
import Container from "../components/container"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"

const App = () => (
    <Container>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <Login path="/app/login" />
        </Router>
    </Container>
)

export default App