'use server';

import { exists, mustExist } from '@penumbra/util/exists';
import { z } from 'zod';

const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(100, { message: 'Name is too long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message is too short' }),
});

export type Schema = z.infer<typeof schema>;
export type ValidationError = {
  message?: Array<string>;
  email?: Array<string>;
  name?: Array<string>;
};

// eslint-disable-next-line
export async function validateForm(formData: FormData): Promise<ValidationError> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  return {};
}

export async function sendEmail(
  prevState: ValidationError,
  formData: FormData,
): Promise<ValidationError> {
  const errors = await validateForm(formData);
  if (exists(errors)) {
    return errors;
  }

  try {
    await fetch(mustExist(process.env.MAIL_URL), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MAIL_API_KEY}`,
      },
    });
  } catch (error) {
    return { message: ['Something went wrong'] };
  }

  return {};
}
