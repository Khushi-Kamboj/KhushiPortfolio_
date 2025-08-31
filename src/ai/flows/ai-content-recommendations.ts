'use server';

/**
 * @fileOverview An AI-powered content recommendation flow.
 *
 * - aiContentRecommendations - A function that handles the content recommendation process.
 * - AiContentRecommendationsInput - The input type for the aiContentRecommendations function.
 * - AiContentRecommendationsOutput - The return type for the aiContentRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContentRecommendationsInputSchema = z.object({
  visitorInterests: z.string().describe('A description of the visitor\'s interests.'),
  portfolioItems: z.array(z.string()).describe('A list of portfolio item descriptions.'),
});
export type AiContentRecommendationsInput = z.infer<typeof AiContentRecommendationsInputSchema>;

const AiContentRecommendationsOutputSchema = z.object({
  recommendedItems: z.array(z.string()).describe('A list of recommended portfolio items based on the visitor\'s interests.'),
});
export type AiContentRecommendationsOutput = z.infer<typeof AiContentRecommendationsOutputSchema>;

export async function aiContentRecommendations(input: AiContentRecommendationsInput): Promise<AiContentRecommendationsOutput> {
  return aiContentRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiContentRecommendationsPrompt',
  input: {schema: AiContentRecommendationsInputSchema},
  output: {schema: AiContentRecommendationsOutputSchema},
  prompt: `You are an AI expert in content recommendation, skilled at matching user interests with relevant portfolio items.

  Given a description of the visitor's interests and a list of available portfolio items, identify the most relevant items to recommend to the visitor.

  Visitor Interests: {{{visitorInterests}}}
  Portfolio Items: {{#each portfolioItems}}- {{{this}}}\n{{/each}}

  Based on the visitor's interests, recommend the most relevant portfolio items from the list.  The items recommended should have high degree of overlap with the specified visitor interests.
  Return only the names of the recommended portfolio items, without any additional commentary or explanation.
  `,
});

const aiContentRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiContentRecommendationsFlow',
    inputSchema: AiContentRecommendationsInputSchema,
    outputSchema: AiContentRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
