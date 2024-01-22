import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type FormData = {
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    summary: string;
  };
  education: {
    institution: string;
    degree: string;
  }[];
};

type FormDataContextType = {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
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
  const initialFormData: FormData = {
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
      },
    ],
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);

  return (
    <formDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </formDataContext.Provider>
  );
};
