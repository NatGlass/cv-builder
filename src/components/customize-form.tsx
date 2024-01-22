import { useFormData } from "@/contexts/FormContext";
import { MainFormType, mainFormSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import EducationForm from "./subforms/education";
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
        summary: "",
      },
      educationDetails: [
        {
          institution: "",
          degree: "",
        },
      ],
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

  const handleReset = () => {
    methods.reset(); // Reset form fields
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: [
        {
          institution: "",
          degree: "",
        },
      ], // Reset education in global state
    }));
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-8"
      >
        <PersonalDetailsForm />
        <EducationForm />
        <div className="space-x-4 my-8">
          <Button type="submit">Save</Button>
          <Button variant="destructive" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default CustomizeForm;
