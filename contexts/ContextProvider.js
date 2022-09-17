import React, { createContext, useContext, useState } from "react";
import * as Localization from 'expo-localization';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState(Localization.locale)

  return (
    <StateContext.Provider
      value={{
        lang, setLang
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)