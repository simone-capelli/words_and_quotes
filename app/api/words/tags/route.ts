import { connectToDB } from '@utils/database';
import Word from '@models/word';

export const GET = async () => {
  try {
    await connectToDB();

    const tags = await Word.aggregate([
      { $project: { _id: 0, tag: 1 } }, // Proietta solo l'attributo 'tag'
      { $group: { _id: null, tags: { $addToSet: '$tag' } } }, // Raggruppa i tag unici in un array
    ]);

    // this happens when there are no words
    if (tags.length === 0) {
      return new Response(JSON.stringify(null), { status: 200 });
    }

    return new Response(JSON.stringify(tags[0].tags), { status: 200 }); // Restituisce l'array di tag
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
};
