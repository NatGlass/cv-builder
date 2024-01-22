import { z } from "zod";

export const personalDetailsSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  summary: z
    .string()
    .min(1, { message: "Summary is required" })
    .max(240, { message: "Try to keep your summary succinct!" }),
});

export const educationSchema = z.array(
  z.object({
    institution: z.string(),
    degree: z.string(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  })
);

export const mainFormSchema = z.object({
  personalDetails: personalDetailsSchema,
  educationSchema: educationSchema,
});

export type PersonalDetailsType = z.infer<typeof personalDetailsSchema>;
export type EducationType = z.infer<typeof educationSchema>;

// Needs to be an explicit object to allow for accessing props in input names
export type MainFormType = {
  personalDetails: PersonalDetailsType;
  education: EducationType;
}

