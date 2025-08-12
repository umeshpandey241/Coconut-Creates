import React, { createContext, useContext, useState } from "react";

const PolicyContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const usePolicy = () => useContext(PolicyContext);

export const PolicyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onAgree, setOnAgree] = useState(() => () => {});

  const openPolicy = (agreeCallback) => {
    setOnAgree(() => agreeCallback);
    setIsOpen(true);
  };

  const closePolicy = () => {
    setIsOpen(false);
  };

  const agree = () => {
    onAgree();
    setIsOpen(false);
  };

  return (
    <PolicyContext.Provider value={{ isOpen, openPolicy, closePolicy, agree }}>
      {children}
    </PolicyContext.Provider>
  );
};
