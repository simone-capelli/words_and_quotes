import { connectToDB } from '@utils/database';
import Word from '@models/word';

export const GET = async () => {
  try {
    await connectToDB();

    const tags = await Word.aggregate([
      { $project: { _id: 0, tag: 1 } }, // Proietta solo l'attributo 'tag'
      { $group: { _id: null, tags: { $addToSet: '$tag' } } }, // Raggruppa i tag unici in un array
    ]);

    return new Response(JSON.stringify(tags[0].tags), { status: 200 }); // Restituisce l'array di tag
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
