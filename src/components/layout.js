import React from "react"
import Navigation from "./navigation"
import styled from "styled-components"

const Layout = ({ children, pageName }) => {
  return (
    <div>
      <LayoutWrapper>
        <Navigation pageName={pageName} />
        {children}
      </LayoutWrapper>
    </div>
  )
}

const LayoutWrapper = styled.div`
  margin-top: 5rem;
`
export default Layout
