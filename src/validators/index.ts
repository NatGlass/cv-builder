import { z } from "zod";

const personalDetailsSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  summary: z
    .string()
    .min(1, { message: "Summary is required" })
    .max(240, { message: "Try to keep your summary succinct!" }),
});

type PersonalDetailsType = {
  personalDetails: z.infer<typeof personalDetailsSchema>;
};

const mainFormSchema = z.object({
  personalDetails: personalDetailsSchema,
});

type MainFormType = z.infer<typeof mainFormSchema>;

export {
  mainFormSchema,
  personalDetailsSchema,
  type MainFormType,
  type PersonalDetailsType,
};
