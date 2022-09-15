import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("The component must be wrapped by the provider!");
  }

  return context;
};

export const DataProvider = (props) => {
  const [data, setData] = useState(null);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
