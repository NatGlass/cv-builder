import { useFormData } from "@/contexts/FormContext";

function Preview() {
  const { formData } = useFormData();
  return (
    <aside className="bg-slate-50 h-screen py-6 px-4 border-r">
      <h1 className="text-3xl font-bold">Preview</h1>
      <div>First Name: {formData.personalDetails?.firstName}</div>
    </aside>
  );
}

export default Preview;
