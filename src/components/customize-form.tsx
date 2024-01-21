import { MainFormType, mainFormSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import PersonalDetailsForm from "./subforms/personal";
import { Button } from "./ui/button";

function CustomizeForm() {
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
