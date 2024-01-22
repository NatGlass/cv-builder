import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { MainFormType } from "@/validators";

type FormDataContextType = {
  formData: MainFormType;
  setFormData: Dispatch<SetStateAction<MainFormType>>;
};

const formDataContext = createContext<null | FormDataContextType>(null);

export const useFormData = () => {
  const context = useContext(formDataContext);

  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

export const FormDataProvider = ({ children }: PropsWithChildren) => {
  const initialFormData: MainFormType = {
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      summary: "",
    },
    education: [
      {
        institution: "",
        degree: "",
        startDate: undefined,
        endDate: undefined,
      },
    ],
  };
  const [formData, setFormData] = useState<MainFormType>(initialFormData);

  return (
    <formDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </formDataContext.Provider>
  );
};
