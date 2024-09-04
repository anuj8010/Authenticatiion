"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'
const Sesionwrapper = ({children}) => {
  console.log(children)
  return (
   
      <SessionProvider>
        {children}
      </SessionProvider>
   
  )
}

export default Sesionwrapper
