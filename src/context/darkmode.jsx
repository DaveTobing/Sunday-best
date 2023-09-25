import { useState, useEffect, createContext} from "react"
import React from 'react'


const DarkModeContext = createContext();

function DarkModeProvider ({children}) {
    const [theme, setTheme] = useState(false)  

  return (
    <DarkModeContext.Provider value={[theme, setTheme]}>
        {children}
    </DarkModeContext.Provider>
  )
}

export {DarkModeProvider, DarkModeContext}