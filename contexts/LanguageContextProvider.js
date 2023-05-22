import React, { useState } from "react";
import LanguageContext from "@/contexts/LanguageContext";

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
