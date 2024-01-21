import { PropsWithChildren, createContext, useContext, useState } from "react";

const formDataContext = createContext<null>(null);

export const useFormData = () => useContext(formDataContext);

export const FormDataProvider = ({ children }: PropsWithChildren) => {
  const [formData, setFormData] = useState({});

  return (
    <formDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </formDataContext.Provider>
  );
};
