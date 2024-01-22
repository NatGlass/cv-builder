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

type EducationEntry = {
  institution: string;
  degree: string;
};

function EducationForm() {
  const form = useFormContext();
  const { formData, setFormData } = useFormData();

  const addNewEducation = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: [...prevFormData.education, { institution: "", degree: "" }],
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: prevFormData.education.filter((_, i) => i !== index),
    }));
  };

  const handleEducationChange = (
    index: number,
    field: keyof EducationEntry,
    value: string
  ) => {
    const updatedEducations = formData.education.map((education, i) =>
      i === index ? { ...education, [field]: value } : education
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: updatedEducations,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>
          List your qualifications, certifications, and degrees.
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-y-8 gap-x-2 flex flex-col">
        {formData.education.map((education, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg">Education #{index + 1}</h3>
              {formData.education.length > 1 && (
                <Button
                  onClick={() => removeEducation(index)}
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
              name={`education[${index}].institution`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Arkham University"
                      value={education.institution}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "institution",
                          e.target.value
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`education[${index}].degree`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree / Certification</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Crime Fighting"
                      value={education.degree}
                      onChange={(e) =>
                        handleEducationChange(index, "degree", e.target.value)
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
          onClick={addNewEducation}
        >
          Add Another Education
        </Button>
      </CardContent>
    </Card>
  );
}

export default EducationForm;
