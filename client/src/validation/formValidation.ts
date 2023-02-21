import { z } from "zod";

export const validate = (value: string) => {
  const tagSchema = z.string().length(8);

  const res = tagSchema.safeParse(value);
  res.success ? console.log(res.success) : alert(res.error.format()._errors[0]);
};
