import React, { useEffect, useState, useContext } from "react"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../../provider/AuthContext"
import Layout from "../../components/layout"
import { Container, Row, Col, Alert, Button, Tab, Tabs } from "react-bootstrap"
import styled from "styled-components"
import { navigate } from "gatsby"

const Profile = () => {
  const { authUser, setAuthUser, runAuthentication, signOut } = useContext(
    AuthContext
  )
  runAuthentication()

  // firebase.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     firebase
  //       .database()
  //       .ref(`/users/${user.uid}`)
  //       .once("value")
  //       .then(snapshot => {
  //         const dbUser = snapshot.val()
  //         setAuthUser({...dbUser, valid: true})
  //       })
  //   }
  // })

  return (
    <div>
      <Layout pageName="Profile">
        <ProfilePageWrapper>
          <Container>
            <Row md="12">
              <Col sm="4">
                <Row>
                  <Alert variant="secondary">Profile</Alert>
                </Row>
                <Row>
                  <Button variant="info" onClick={signOut}>
                    Sign out
                  </Button>
                </Row>
              </Col>
              <Col sm="8">
                <Tabs
                  defaultActiveKey="account-details"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="account-details" title="Account Details">
                    lorem lorem Account Details lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem
                  </Tab>
                  <Tab eventKey="personal-details" title="Personal Details">
                    lorem lorem Personal Details lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </ProfilePageWrapper>
      </Layout>
    </div>
  )
}

const ProfilePageWrapper = styled.div`
  padding: 1rem;
`

export default Profile
