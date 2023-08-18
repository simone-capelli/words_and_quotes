import Word from '@models/word';
import { connectToDB } from '@utils/database';

export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  try {
    await connectToDB();
    const word = await Word.findByIdAndDelete(id);
    return new Response(JSON.stringify(word), { status: 200 });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
};
