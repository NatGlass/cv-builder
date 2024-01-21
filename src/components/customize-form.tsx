import { useFormData } from "@/contexts/FormContext";
import { MainFormType, mainFormSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import PersonalDetailsForm from "./subforms/personal";
import { Button } from "./ui/button";
import { useEffect } from "react";

function CustomizeForm() {
  const { setFormData } = useFormData();
  const methods = useForm<MainFormType>({
    resolver: zodResolver(mainFormSchema),
    defaultValues: {
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    },
  });
  
  useEffect(() => { 
    const subscription = methods.watch((value, { name, type }) => {
      setFormData(value);
    });
    return () => subscription.unsubscribe();
  }, [methods.watch, setFormData])

  const onSubmit = (data: MainFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalDetailsForm />
        <Button type="submit">Save</Button>
      </form>
    </FormProvider>
  );
}

export default CustomizeForm;
