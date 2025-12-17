import { z } from 'zod';

export const ratingSchema = z.object({
  viewpointId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  review: z.string().max(2000).optional()
});

export type RatingInput = z.infer<typeof ratingSchema>;
