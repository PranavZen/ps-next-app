'use client'
import React, { createContext, useContext, useState } from "react";

const OurStoreContext = createContext();

export const OurStoreProvider = ({ children }) => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <OurStoreContext.Provider value={{ selectedStore, setSelectedStore }}>
      {children}
    </OurStoreContext.Provider>
  );
};

export const useOurStore = () => useContext(OurStoreContext);
