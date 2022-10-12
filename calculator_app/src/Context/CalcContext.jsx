import React, { Children, createContext } from 'react'
import { useState } from 'react';
export const Calcontext = createContext()

const CalcProvider = ({children}) => {
const [calc, setCalc] = useState ({
    sign:"",
    num: 0,
    res: 0
});

const providerValue = {
    calc, setCalc
}

  return (
    <Calcontext.Provider value={providerValue}>
        {children}
    </Calcontext.Provider>
  )
}

export default CalcProvider