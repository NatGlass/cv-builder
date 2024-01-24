import { useFormData } from "@/contexts/FormContext";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type WorkEntry = {
  company: string;
  role: string;
};

function WorkForm() {
  const form = useFormContext();
  const { formData, setFormData } = useFormData();

  const addNewWork = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      work: [...prevFormData.work, { company: "", role: "" }],
    }));
  };

  const removeWork = (index: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      work: prevFormData.work.filter((_, i) => i !== index),
    }));
  };

  const handleWorkChange = (
    index: number,
    field: keyof WorkEntry,
    value: string
  ) => {
    const updatedWork = formData.work.map((work, i) =>
      i === index ? { ...work, [field]: value } : work
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      work: updatedWork,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Work</CardTitle>
        <CardDescription>List your previous work experiences.</CardDescription>
      </CardHeader>
      <CardContent className="gap-y-8 gap-x-2 flex flex-col">
        {formData.work.map((work, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg">Work #{index + 1}</h3>
              {formData.education.length > 1 && (
                <Button
                  onClick={() => removeWork(index)}
                  variant="destructive"
                  size="sm"
                  type="button"
                >
                  Remove
                </Button>
              )}
            </div>
            <FormField
              control={form.control}
              name={`work[${index}].company`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Arkham University"
                      value={work.company}
                      onChange={(e) =>
                        handleWorkChange(index, "company", e.target.value)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`work[${index}].role`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Crime Fighting"
                      value={work.role}
                      onChange={(e) =>
                        handleWorkChange(index, "role", e.target.value)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
        <Button
          type="button"
          className="w-full col-span-2"
          onClick={addNewWork}
        >
          Add Another Work
        </Button>
      </CardContent>
    </Card>
  );
}

export default WorkForm;
