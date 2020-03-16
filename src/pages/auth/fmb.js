import React, { useContext } from "react"
import Layout from "../../components/layout"
import { AuthContext } from "../../provider/AuthContext"

const FMB = () => {
  const { runAuthentication } = useContext(AuthContext)
  runAuthentication()

  return (
    <div>
      <Layout pageName="Faiz-ul-Mawaid">
        <h1>Hello from FMB page</h1>
      </Layout>
    </div>
  )
}

export default FMB
