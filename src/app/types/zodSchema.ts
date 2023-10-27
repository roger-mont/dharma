import * as z from 'zod';

export const formSchema = z.object({
  damage: z.string().default('0'),
  defense: z.string().default('0'),
});
