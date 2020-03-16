import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import firebase from "gatsby-plugin-firebase"
import { Alert } from "react-bootstrap"

import AccountDetails from "../components/registration/account-details"
import PersonalDetails from "../components/registration/personal-details"
import Review from "../components/registration/review"
import styled from "styled-components"

const ErrorMessage = ({ message, handler }) => {
  return (
    <Alert
      variant="danger"
      onClose={() => handler({ occurred: false, message: null })}
      dismissible
    >
      <Alert.Heading as="h5">Error registering!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  )
}

const Register = () => {
  const [accountDetails, setaccountDetails] = useState({
    its: "77777777",
    firstname: "ib",
    lastname: "chickeb",
    email: "test5@test.com",
    password: "password",
  })

  const [personalDetails, setPersonalDetails] = useState({
    gender: "Male",
    dob: "2020-01-20",
    title: "Mulla",
    address: "12412",
    phone: "888888888",
    moveType: "",
    familyID: "",
  })

  const [error, setError] = useState({ occurred: false, message: "" })

  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const writeUserData = (uid, metadata) => {
    firebase
      .database()
      .ref("users/" + uid)
      .set(metadata)
  }

  const submitData = () => {
    const metadata = {
      ...accountDetails,
      ...personalDetails,
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        accountDetails.email,
        accountDetails.password
      )
      .then(response => {
        if (response) {
          console.log(response)

          writeUserData(response.user.uid, {
            ...metadata,
            uid: response.user.uid,
            permissions: { admin: false },
          })
          navigate("/auth/profile")
        }
      })
      .catch(error => {
        setError({ occurred: true, message: error.message })
      })
  }

  const getCurrentForm = step => {
    switch (step) {
      case 1:
        return (
          <AccountDetails
            form={accountDetails}
            setForm={setaccountDetails}
            next={nextStep}
            setError={setError}
          />
        )
      case 2:
        return (
          <PersonalDetails
            form={personalDetails}
            setForm={setPersonalDetails}
            setError={setError}
            next={nextStep}
            back={prevStep}
          />
        )
      case 3:
        return (
          <Review
            accountDetails={accountDetails}
            personalDetails={personalDetails}
            setError={setError}
            back={prevStep}
            submit={submitData}
          />
        )
      default:
        return (
          <AccountDetails
            form={accountDetails}
            setForm={setaccountDetails}
            next={nextStep}
            setError={setError}
          />
        )
    }
  }

  return (
    <div>
      <Layout pageName="Register">
        <RegisterWrapper>
          {error.occurred ? (
            <ErrorMessage message={error.message} handler={setError} />
          ) : (
            <div></div>
          )}
          {getCurrentForm(step)}
        </RegisterWrapper>
      </Layout>
    </div>
  )
}

const RegisterWrapper = styled.div`
  padding: 0 1rem 0 1rem;
  margin: 3rem auto;
  max-width: 700px;
`
export default Register
