
'use server';
/**
 * @fileOverview AI powered style match tool.
 *
 * - styleMatchJackets - A function that handles the style matching process.
 * - StyleMatchJacketsInput - The input type for the styleMatchJackets function.
 * - StyleMatchJacketsOutput - The return type for the styleMatchJackets function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleMatchJacketsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a leather jacket style, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type StyleMatchJacketsInput = z.infer<typeof StyleMatchJacketsInputSchema>;

const StyleMatchJacketsOutputSchema = z.object({
  styleMatchResult: z.string().describe('The AI analysis of visually similar jackets from the catalog.'),
});
export type StyleMatchJacketsOutput = z.infer<typeof StyleMatchJacketsOutputSchema>;

export async function styleMatchJackets(input: StyleMatchJacketsInput): Promise<StyleMatchJacketsOutput> {
  return styleMatchJacketsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleMatchJacketsPrompt',
  input: {schema: StyleMatchJacketsInputSchema},
  output: {schema: StyleMatchJacketsOutputSchema},
  prompt: `You are an AI assistant that helps users find visually similar leather jackets from a catalog based on an uploaded image.

Analyze the style of the leather jacket in the following image and provide a description of visually similar jackets from the Prestige Leathers catalog.

Photo: {{media url=photoDataUri}}`,
});

const styleMatchJacketsFlow = ai.defineFlow(
  {
    name: 'styleMatchJacketsFlow',
    inputSchema: StyleMatchJacketsInputSchema,
    outputSchema: StyleMatchJacketsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
