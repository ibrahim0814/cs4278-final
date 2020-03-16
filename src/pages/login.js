import React, { useState, useEffect, useContext } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import Layout from "../components/layout"
import firebase from "gatsby-plugin-firebase"
import styled from "styled-components"
import { navigate } from "gatsby"
import { AuthContext } from "../provider/AuthContext"

const ErrorMessage = ({ message, handler }) => {
  return (
    <Alert
      variant="danger"
      onClose={() => handler({ occurred: false, message: null })}
      dismissible
    >
      <Alert.Heading as="h5">Error logging in!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  )
}

const Login = () => {
  const [data, setData] = useState(null)
  const [email, setEmail] = useState("test9@test.com")
  const [password, setPassword] = useState("password")
  const [error, setError] = useState({ occurred: false, message: null })
  const { setAuthUser } = useContext(AuthContext)

  useEffect(() => {
    const group = firebase.database().ref("/group1")
    group.once("value").then(snapshot => {
      setData(snapshot.val())
      console.log(snapshot.val())
    })
    group.on("value", snapshot => {
      setData(snapshot.val())
      console.log(snapshot.val())
    })
  }, [])

  const emailChange = event => {
    setEmail(event.target.value)
  }

  const passwordChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (email && password) {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(email, password)
        })
        .then(response => {
          //console.log("user: " + response.user)
          if (response.user.uid) {
            firebase
              .database()
              .ref("users/" + response.user.uid)
              .once("value")
              .then(snapshot => {
                let snap = snapshot.val()
                setAuthUser({
                  valid: true,
                  email: response.user.email,
                  uid: response.user.uid,
                  firstname: snap.firstname,
                  lastname: snap.lastname,
                  title: snap.title,
                  its: snap.its,
                  permissions: {
                    admin: snap.permissions ? snap.permissions.admin : false,
                  },
                })
              })
              .then(() => {
                navigate("/auth/profile")
              })
          }
        })
        .catch(error => {
          setError({ occurred: true, message: error.message })
        })
    } else {
      setError({
        occurred: true,
        message: "Some fields are missing. Enter email and password.",
      })
    }
  }

  return (
    <Layout pageName="Login">
      <LoginWrapper>
        {error.occurred ? (
          <ErrorMessage message={error.message} handler={setError} />
        ) : (
          <div></div>
        )}
        <Card>
          <Card.Header className="cardHeader">
            <h4>Login</h4>
          </Card.Header>
          <Form className="formStyle">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={emailChange} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={passwordChange}
              />
            </Form.Group>
            <Button variant="info" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
      </LoginWrapper>
    </Layout>
  )
}

const LoginWrapper = styled.div`
  padding: 0 1rem 0 1rem;
  margin: 3rem auto;
  max-width: 700px;
  .formStyle {
    margin: 0.5rem;
  }
  .cardHeader {
    text-align: center;
  }
`

export default Login
