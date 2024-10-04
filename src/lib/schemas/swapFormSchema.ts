import { z } from 'zod';

export const swapFormSchema = z.object({
  fromChainId: z.number().nonnegative({ message: 'Source chain is required' }),
  fromTokenAddress: z.string().min(1, { message: 'Source token is required' }),
  toChainId: z.number().nonnegative({ message: 'Destination chain is required' }),
  toTokenAddress: z.string().min(1, { message: 'Destination token is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  amount: z
    .string()
    .min(1, { message: 'Amount is required' })
    .regex(/^\d+(\.\d+)?$/, { message: 'Invalid amount' })
    .refine((val) => parseFloat(val) > 0, { message: 'Amount must be greater than zero' })
});

export type SwapFormValues = z.infer<typeof swapFormSchema>;
