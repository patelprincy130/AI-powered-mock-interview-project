'use server';

import { createFeedback } from '@/lib/actions/general.action.server';

export async function createFeedbackAction(params: {
  interviewId: string;
  userId: string;
  transcript: { role: 'user' | 'system' | 'assistant'; content: string }[];
}) {
  return await createFeedback(params);
}
