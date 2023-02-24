import { z } from "zod";

export const validate = (value: string): boolean => {
  const tagSchema = z.string().min(8);

  const res = tagSchema.safeParse(value);

  if (!res.success) alert(res.error.format()._errors[0]);

  return true;
};
