import { useFormData } from "@/contexts/FormContext";
import { Separator } from "./ui/separator";

function Preview() {
  const { formData } = useFormData();
  return (
    <aside className="bg-slate-50 h-screen py-6 px-4 border-r">
      <h1 className="text-3xl font-bold mb-8">Preview</h1>
      <div className="w-full h-full min-w-[300px] bg-white rounded-lg">
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4">
            {formData.personalDetails?.firstName ? (
              <>{formData.personalDetails?.firstName}</>
            ) : (
              <>First Name</>
            )}{" "}
            {formData.personalDetails?.lastName ? (
              <>{formData.personalDetails?.lastName}</>
            ) : (
              <>Last Name</>
            )}{" "}
          </h2>
          <Separator />
        </div>
      </div>
      <div></div>
      <div>Email: {formData.personalDetails?.email}</div>
      <div>Phone: {formData.personalDetails?.phone}</div>
    </aside>
  );
}

export default Preview;
