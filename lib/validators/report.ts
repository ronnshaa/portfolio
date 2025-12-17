import { z } from 'zod';

export const reportSchema = z.object({
  viewpointId: z.string().uuid(),
  reason: z.string().min(5).max(1000)
});

export type ReportInput = z.infer<typeof reportSchema>;
