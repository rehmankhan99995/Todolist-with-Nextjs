"use client"
import React, { createContext } from 'react'
export const MyContext= createContext()
const Context = ({children}) => {
  const data ='re fefeferfe'
    return (
    <div>
      <MyContext.Provider value={data}>
      {children}
      </MyContext.Provider>
    </div>
  )
}

export default Context
