import { useFormData } from "@/contexts/FormContext";
import { Separator } from "./ui/separator";

function Preview() {
  const { formData } = useFormData();

  return (
    <aside className="bg-slate-50 h-screen py-6 px-4 border-r ">
      <h1 className="text-3xl font-bold mb-8">Preview</h1>
      <div className="w-full h-full min-w-[300px] bg-white rounded-lg overflow-hidden">
        <div className="p-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              {formData.personalDetails?.firstName}
              &nbsp;
              {formData.personalDetails?.lastName}
            </h2>
            <Separator />
          </div>
          <section className="grid grid-cols-2 md:grid-cols-3 my-8 gap-x-4">
            <div id="description" className="md:col-span-2">
              <h2 className="text-2xl">Summary</h2>
              <p className="max-w-prose">{formData.personalDetails?.summary}</p>
            </div>
            <div id="contact" className="md:col-span-1">
              <h2 className="text-2xl">Contact</h2>
              <div>
                Email:&nbsp;
                {formData.personalDetails?.email}
              </div>
              <div>
                Phone:&nbsp;
                {formData.personalDetails?.phone}
              </div>
            </div>
          </section>
          <Separator />
          <div id="education" className="my-8">
            <h2 className="text-2xl">Education</h2>
            {formData.education.map((education, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{education.institution}</h3>
                <p>{education.degree}</p>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </aside>
  );
}

export default Preview;
