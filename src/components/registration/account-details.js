import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import RegisterStepOutline from "./register-step-outline"

const AccountDetails = ({ form, setForm, next, setError }) => {
  const validateEmail = email => {
    return /\S+@\S+\.\S+/.test(email)
  }
  const validatePass = (currentPass, confirmPass) => {
    return currentPass.length >= 6 && currentPass === confirmPass
  }

  const handleChange = input => event => {
    setForm({ ...form, [input]: event.target.value })
  }
  const [confirmPass, setConfirmPass] = useState("")

  const handleConfirmPassChange = event => {
    setConfirmPass(event.target.value)
  }

  const handleNext = () => {
    if (
      !form.its ||
      !form.email ||
      !form.password ||
      !form.firstname ||
      !form.lastname
    ) {
      setError({
        occurred: true,
        message: "Some fields are empty",
      })
    } else if (form.its.length !== 8) {
      setError({
        occurred: true,
        message: "ITS number needs to be of length 8",
      })
    } else if (!validateEmail(form.email)) {
      setError({ occurred: true, message: "Email is not in valid form" })
    } else if (!validatePass(form.password, confirmPass)) {
      setError({
        occurred: true,
        message: "Passwords do not match or password length is < 6",
      })
    } else {
      setError({ occurred: false, message: "" })
      next()
    }
  }
  return (
    <RegisterStepOutline title="Account Details" stepNumber="1">
      <Form>
        <Form.Group controlId="its">
          <Form.Label>ITS #:</Form.Label>
          <Form.Control
            type="number"
            value={form.its}
            onChange={handleChange("its")}
          />
        </Form.Group>
        <Form.Group controlId="firstname">
          <Form.Label>First name:</Form.Label>
          <Form.Control
            type="text"
            value={form.firstname}
            onChange={handleChange("firstname")}
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            type="text"
            value={form.lastname}
            onChange={handleChange("lastname")}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={form.email}
            onChange={handleChange("email")}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={form.password}
            onChange={handleChange("password")}
          />
        </Form.Group>
        <Form.Group controlId="confirmPass">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            value={confirmPass}
            onChange={handleConfirmPassChange}
          />
        </Form.Group>
        <Button
          className="float-right mt-3"
          variant="info"
          onClick={handleNext}
        >
          Next
        </Button>
      </Form>
    </RegisterStepOutline>
  )
}

export default AccountDetails
