import { z } from 'zod';

export const viewpointSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(10).max(2000),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180)
});

export type ViewpointInput = z.infer<typeof viewpointSchema>;
