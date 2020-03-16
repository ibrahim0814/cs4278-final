import React from "react"
import { Badge } from "react-bootstrap"
import styled from "styled-components"

const CustomBadge = ({ variant, isPill, text }) => {
  return (
    <BadgeWrapper>
      <Badge className="step" pill={isPill} variant={variant}>
        {text}
      </Badge>
    </BadgeWrapper>
  )
}

const BadgeWrapper = styled.div`
  text-align: right;
  position: absolute;
  top: 0.7rem;
  right: 1.3rem;
  font-size: 1.3rem;
`

export default CustomBadge
