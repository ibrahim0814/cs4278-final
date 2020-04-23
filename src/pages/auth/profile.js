import React, { useEffect, useState, useContext } from "react"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../../provider/AuthContext"
import Layout from "../../components/layout"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tab,
  Tabs,
  Accordion,
} from "react-bootstrap"
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
                  <Card>
                    <Card.Header>User Profile</Card.Header>
                    <Card.Body>
                      <Card.Title>Ibrahim Ali</Card.Title>
                      <Card.Text>
                        <strong>ITS: </strong>328928393
                      </Card.Text>
                      <Card.Text>
                        <strong>Email: </strong>ibrahim.0814@gmail.com
                      </Card.Text>
                      <Card.Text>
                        <strong>DOB: </strong>08-14-1998
                      </Card.Text>
                      <Card.Text>
                        <strong>Phone: </strong>442-264-9361
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Row>
              </Col>
              <Col sm="8">
                <Tabs defaultActiveKey="rsvp" id="uncontrolled-tab-example">
                  <Tab eventKey="rsvp" title="RSVP">
                    <Accordion defaultActiveKey="0" className="accordian">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Events Attending
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Card.Title>Ramadan Day 1</Card.Title>
                            <Card.Text>
                              <strong>Host:</strong> Fatehi Family <br></br>
                              <strong>Date:</strong> 5/2/20 <br></br>
                              <strong>Venue:</strong> Mosque
                            </Card.Text>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="1"
                          >
                            Upcoming Events
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <Card.Title>Ramadan Day 2</Card.Title>
                            <Card.Text>
                              <strong>Host:</strong> Ali Family <br></br>
                              <strong>Date:</strong> 5/1/20 <br></br>
                              <strong>Venue:</strong> Mosque
                            </Card.Text>
                            <Button variant="info">RSVP</Button>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Tab>
                  <Tab eventKey="account-details" title="Account Details"></Tab>
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

  .accordian {
    padding-top: 1rem;
  }
`

export default Profile
