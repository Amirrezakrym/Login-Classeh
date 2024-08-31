"use server";
import { z } from "zod";

const schemaRegister = z.object({
  number: z
    .string()
    .nonempty({message:"خالی ارسال نمیشه"})
    .min(11, { message: "کم تر از ۱۱ تا نمیشه" })
    .regex(/^\d+$/, { message: "عزیزم شماره تلفنت باید شامل اعداد باشه" })
});

export async function LoginRegister(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    number: formData.get("number"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register",
      success: false, 
    };
  }
  return {
    ...prevState,
    message: "Registration successful!",
    success: true, 
  };
}
