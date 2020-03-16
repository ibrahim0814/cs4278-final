import React, { useState, createContext, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    valid: firebase.auth().currentUser ? true : false,
    email: null,
    uid: null,
    firstname: null,
    lastname: null,
    title: null,
    its: null,
    permissions: {
      admin: null,
    },
  })

  const runAuthentication = () => {
    if (!firebase.auth().currentUser) {
      navigate("/login")
    }
  }

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setAuthUser({
          ...authUser,
          valid: false,
        })
      })
      .then(() => navigate("/login"))
  }

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, runAuthentication, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
