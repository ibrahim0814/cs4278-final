import React from "react"
import CustomBadge from "../custom-badge"
import { Card, Badge } from "react-bootstrap"
import styled from "styled-components"

const RegisterStepOutline = ({ children, title, stepNumber }) => {
  return (
    <div>
      <RegisterStepWrapper>
        <Card>
          <Card.Header as="h4" className="cardHeader">
            Register
            <CustomBadge
              text={stepNumber + " of 3"}
              isPill="true"
              variant="info"
            />
          </Card.Header>
          <Card.Body>
            <Card.Text className="cardTitle" as="h5">
              <Badge variant="info">{title}</Badge>
            </Card.Text>
            <Card.Text as="div">{children}</Card.Text>
          </Card.Body>
        </Card>
      </RegisterStepWrapper>
    </div>
  )
}

const RegisterStepWrapper = styled.div`
  .formStyle {
    margin: 0.5rem;
  }
  .cardHeader {
    text-align: center;
  }
  .cardTitle {
    text-align: center;
    font-size: 1.5rem;
  }
`

export default RegisterStepOutline
