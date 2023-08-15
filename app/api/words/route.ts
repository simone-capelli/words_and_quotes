import { connectToDB } from '@utils/database';
import Word from '@models/word';

export const GET = async () => {
  try {
    await connectToDB();

    const words = await Word.find({}); // returns all words

    return new Response(JSON.stringify(words), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all words', { status: 500 });
  }
};
