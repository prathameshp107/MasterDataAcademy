'use server';
/**
 * @fileOverview A Genkit flow for generating personalized course recommendations.
 *
 * - personalizeDashboardRecommendations - A function that handles generating course recommendations.
 * - AiPersonalizedDashboardRecommendationsInput - The input type for the personalizeDashboardRecommendations function.
 * - AiPersonalizedDashboardRecommendationsOutput - The return type for the personalizeDashboardRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPersonalizedDashboardRecommendationsInputSchema = z.object({
  userId: z.string().describe('The ID of the user requesting recommendations.'),
  viewingHistory: z.array(z.object({
    courseId: z.string().describe('The ID of the course viewed.'),
    title: z.string().describe('The title of the course viewed.'),
    lastViewed: z.string().datetime().describe('The timestamp of the last view.'),
  })).describe('A list of courses the user has viewed.'),
  enrolledCourses: z.array(z.object({
    courseId: z.string().describe('The ID of the enrolled course.'),
    title: z.string().describe('The title of the enrolled course.'),
    progress: z.number().min(0).max(100).describe('The user\'s progress percentage in the course.'),
    status: z.enum(['not_started', 'in_progress', 'completed']).describe('The enrollment status.'),
  })).describe('A list of courses the user is currently enrolled in, including progress.'),
  userInterests: z.array(z.string()).describe('A list of topics or categories the user has declared interest in.'),
  availableCourses: z.array(z.object({
    courseId: z.string().describe('The ID of an available course.'),
    title: z.string().describe('The title of the available course.'),
    description: z.string().describe('A short description of the available course.'),
    category: z.string().describe('The category of the available course.'),
    prerequisites: z.array(z.string()).optional().describe('Optional prerequisites for the course.'),
  })).describe('A list of all courses available on the platform, to pick recommendations from.'),
});
export type AiPersonalizedDashboardRecommendationsInput = z.infer<typeof AiPersonalizedDashboardRecommendationsInputSchema>;

const AiPersonalizedDashboardRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.object({
    courseId: z.string().describe('The ID of the recommended course.'),
    title: z.string().describe('The title of the recommended course.'),
    description: z.string().describe('A short description of the recommended course.'),
    reason: z.string().describe('A brief explanation of why this course is recommended.'),
  })).describe('A list of personalized course recommendations.'),
});
export type AiPersonalizedDashboardRecommendationsOutput = z.infer<typeof AiPersonalizedDashboardRecommendationsOutputSchema>;

export async function personalizeDashboardRecommendations(input: AiPersonalizedDashboardRecommendationsInput): Promise<AiPersonalizedDashboardRecommendationsOutput> {
  return aiPersonalizedDashboardRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedDashboardRecommendationsPrompt',
  input: {schema: AiPersonalizedDashboardRecommendationsInputSchema},
  output: {schema: AiPersonalizedDashboardRecommendationsOutputSchema},
  prompt: `You are an AI assistant specialized in providing personalized course recommendations for an online learning platform called Master Data Academy.
Your goal is to suggest highly relevant courses to a user based on their learning history, progress, and declared interests.

Consider the following information about the user and available courses:

User ID: {{{userId}}}

Viewing History:
{{#if viewingHistory}}
{{#each viewingHistory}}
- Course: "{{{title}}}" (ID: {{{courseId}}}), Last Viewed: {{{lastViewed}}}
{{/each}}
{{else}}
No viewing history available.
{{/if}}

Enrolled Courses:
{{#if enrolledCourses}}
{{#each enrolledCourses}}
- Course: "{{{title}}}" (ID: {{{courseId}}}), Progress: {{{progress}}}%, Status: {{{status}}}
{{/each}}
{{else}}
No enrolled courses.
{{/if}}

User Interests:
{{#if userInterests}}
{{#each userInterests}}
- {{{this}}}
{{/each}}
{{else}}
No declared interests.
{{/if}}

Available Courses (to choose recommendations from):
{{#if availableCourses}}
{{#each availableCourses}}
- Course: "{{{title}}}" (ID: {{{courseId}}}), Category: {{{category}}}, Description: {{{description}}}
  {{#if prerequisites}}Prerequisites: {{{prerequisites}}}{{/if}}
{{/each}}
{{else}}
No available courses provided.
{{/if}}

Based on the user's viewing history, progress in enrolled courses, and declared interests, provide a list of highly relevant course recommendations from the 'Available Courses' list.
Prioritize courses that:
1. Complement their in-progress or completed courses.
2. Align with their declared interests.
3. Are related to courses they have viewed.
4. Offer logical next steps in their learning journey.
5. Avoid recommending courses they are already enrolled in or have completed.

For each recommendation, provide the 'courseId', 'title', 'description', and a brief 'reason' explaining why it is recommended.
Ensure the recommendations are distinct and do not duplicate courses already in the user's 'enrolledCourses'.
Limit the recommendations to a maximum of 5 courses.
`
});

const aiPersonalizedDashboardRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiPersonalizedDashboardRecommendationsFlow',
    inputSchema: AiPersonalizedDashboardRecommendationsInputSchema,
    outputSchema: AiPersonalizedDashboardRecommendationsOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
