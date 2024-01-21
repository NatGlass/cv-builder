import { useFormData } from "@/contexts/FormContext";
import { MainFormType, mainFormSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PersonalDetailsForm from "./subforms/personal";
import { Button } from "./ui/button";

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
    const subscription = methods.watch((value) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        personalDetails: {
          ...prevFormData.personalDetails,
          ...value.personalDetails,
        },
      }));
    });
    return () => subscription.unsubscribe();
  }, [methods.watch, setFormData]);

  const onSubmit = (data: MainFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalDetailsForm />
        <div className="space-x-4 my-8">
          <Button type="submit">Save</Button>
          <Button variant="destructive" onClick={() => methods.reset()}>
            Reset
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default CustomizeForm;
