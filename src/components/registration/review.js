import React from "react"
import RegisterStepOutline from "./register-step-outline"
import { Card, Button } from "react-bootstrap"

const Review = ({ accountDetails, personalDetails, submit, back }) => {
  return (
    <div>
      <RegisterStepOutline stepNumber="3" title="Review">
        <Card className="mt-3">
          <Card.Header className="mb-2">Account Details</Card.Header>
          <ul>
            {Object.keys(accountDetails).map((key, index) => {
              const capitalKey = key.charAt(0).toUpperCase() + key.slice(1)
              let pass = ""
              if (key === "password") {
                for (let letter in accountDetails[key]) {
                  pass += "*"
                }
              }
              return (
                <li key={index}>
                  {capitalKey} :{" "}
                  {key === "password" ? pass : accountDetails[key]}
                </li>
              )
            })}
          </ul>
        </Card>
        <Card className="mt-3">
          <Card.Header className="mb-2">Personal Details</Card.Header>
          <ul>
            {Object.keys(personalDetails).map((key, index) => {
              const capitalKey = key.charAt(0).toUpperCase() + key.slice(1)
              return (
                <li key={index}>
                  {capitalKey} :{" "}
                  {key === "password" ? "******" : personalDetails[key]}
                </li>
              )
            })}
          </ul>
        </Card>
        <Button className="float-right mt-3" variant="primary" onClick={submit}>
          Submit
        </Button>
        <Button className="float-left mt-3" variant="secondary" onClick={back}>
          Back
        </Button>
      </RegisterStepOutline>
    </div>
  )
}

export default Review
