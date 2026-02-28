'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating initial course recommendations for new users.
 *
 * - aiInitialCourseRecommendations - A function that provides course suggestions based on user interests and skill level.
 * - AiInitialCourseRecommendationsInput - The input type for the aiInitialCourseRecommendations function.
 * - AiInitialCourseRecommendationsOutput - The return type for the aiInitialCourseRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiInitialCourseRecommendationsInputSchema = z.object({
  interests: z
    .array(z.string())
    .describe('A list of topics or areas the user is interested in learning about.'),
  skillLevel: z
    .enum(['beginner', 'intermediate', 'advanced'])
    .describe("The user's self-declared skill level."),
  courseCatalog: z
    .string()
    .describe(
      'A JSON string representing the available course catalog, including course IDs, titles, descriptions, and categories.'
    ),
});
export type AiInitialCourseRecommendationsInput = z.infer<
  typeof AiInitialCourseRecommendationsInputSchema
>;

const AiInitialCourseRecommendationsOutputSchema = z.object({
  recommendedCourses: z
    .array(
      z.object({
        id: z.string().describe('The unique identifier of the course.'),
        title: z.string().describe('The title of the course.'),
        description: z.string().describe('A brief description of the course.'),
        category: z.string().describe('The category the course belongs to.'),
      })
    )
    .describe(
      'An array of recommended courses with their ID, title, description, and category, selected from the provided catalog based on user interests and skill level.'
    ),
});
export type AiInitialCourseRecommendationsOutput = z.infer<
  typeof AiInitialCourseRecommendationsOutputSchema
>;

export async function aiInitialCourseRecommendations(
  input: AiInitialCourseRecommendationsInput
): Promise<AiInitialCourseRecommendationsOutput> {
  return aiInitialCourseRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'initialCourseRecommendationsPrompt',
  input: {schema: AiInitialCourseRecommendationsInputSchema},
  output: {schema: AiInitialCourseRecommendationsOutputSchema},
  prompt: `You are an expert course recommendation system for an online learning platform. Your goal is to suggest highly relevant courses to a new user based on their stated interests and skill level from the provided course catalog.

User Interests: {{{interests}}}
User Skill Level: {{{skillLevel}}}

Available Course Catalog (JSON format):
{{{courseCatalog}}}

Please analyze the user's profile and the available courses. From the 'courseCatalog', select up to 5 courses that are most suitable for the user. Ensure the recommended courses align with their interests and are appropriate for their declared skill level.

Provide your recommendations in a JSON array format, where each object has 'id', 'title', 'description', and 'category' fields for the recommended course. Only include courses that are present in the provided catalog.`,
});

const aiInitialCourseRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiInitialCourseRecommendationsFlow',
    inputSchema: AiInitialCourseRecommendationsInputSchema,
    outputSchema: AiInitialCourseRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
