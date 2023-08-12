import { connectToDB } from '@utils/database';
import Word from '@models/word';

export const POST = async (request) => {
  const { word, tag, isLearned, meaning } = await request.json();

  try {
    await connectToDB();

    const newWord = new Word({
      word,
      tag,
      isLearned,
      meaning,
    });

    await newWord.save();

    return new Response(JSON.stringify(newWord), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
