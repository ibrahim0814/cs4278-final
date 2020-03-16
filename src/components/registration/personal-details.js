import React from "react"
import { Form, Button, FormControl } from "react-bootstrap"
import RegisterStepOutline from "./register-step-outline"
import { families } from "../../../static/families.json"
import styled from "styled-components"

const PersonalDetails = ({ form, setForm, setError, next, back }) => {
  const handleChange = input => event => {
    setForm({
      ...form,
      [input]: event.target.value === "Select..." ? "" : event.target.value,
    })
  }

  const validatePhoneNumber = phone => {
    let phoneno = /^\d{9}$/
    return phone.match(phoneno)
  }

  const validateForm = () => {
    if (
      !form.dob ||
      !form.gender ||
      !form.address ||
      !form.phone ||
      !form.moveType ||
      !form.familyID
    ) {
      setError({ occurred: true, message: "Some required fields are empty" })
    } else if (!validatePhoneNumber(form.phone)) {
      setError({ occurred: true, message: "Phone number length is incorrect" })
    } else {
      next()
    }
  }
  return (
    <RegisterStepOutline title="Personal Details" stepNumber="2">
      <Form>
        <Form.Group className="form-element" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            as="select"
            value={form.title}
            onChange={handleChange("title")}
          >
            <option>Select...</option>
            <option>Shaikh</option>
            <option>Mulla</option>
            <option>NKD</option>
            <option>MKD</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="form-element" controlId="gender">
          <Form.Label>*Gender:</Form.Label>
          <Form.Control
            as="select"
            value={form.gender}
            onChange={handleChange("gender")}
          >
            <option>Select...</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="form-element" controlId="dob">
          <Form.Label>*Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            value={form.dob}
            onChange={handleChange("dob")}
          />
        </Form.Group>

        <Form.Group className="form-element" controlId="address">
          <Form.Label>*Address:</Form.Label>
          <Form.Control
            type="text"
            value={form.address}
            onChange={handleChange("address")}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>*Phone # (9-digit):</Form.Label>
          <Form.Control
            type="number"
            value={form.phone}
            onChange={handleChange("phone")}
          />
        </Form.Group>
        <Form.Group controlId="moveType">
          <Form.Label>*Move type:</Form.Label>
          <Form.Control
            as="select"
            value={form.moveType}
            onChange={handleChange("moveType")}
          >
            <option>Select...</option>
            <option>Temporary (less than 6 months)</option>
            <option>Permanent</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="familyID">
          <Form.Label>*Family ID:</Form.Label>
          <Form.Control
            as="select"
            value={form.familyID}
            onChange={handleChange("familyID")}
          >
            <option>Select...</option>
            <option>N/A</option>
            {families.map((family, index) => {
              return <option key={index}>{family.description}</option>
            })}
          </Form.Control>
        </Form.Group>

        <Button
          className="float-right mt-3"
          variant="info"
          onClick={validateForm}
        >
          Next
        </Button>
        <Button className="float-left mt-3" variant="secondary" onClick={back}>
          Back
        </Button>
      </Form>
    </RegisterStepOutline>
  )
}

export default PersonalDetails
