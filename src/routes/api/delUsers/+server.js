import { error } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const uri = 'mongodb+srv://root:juana99@cluster0.zf9fl.mongodb.net/?retryWrites=true&w=majority';

export async function DELETE({ url }) {
  const id = url.searchParams.get('id'); 
  const objectId = new ObjectId(id);
 
  if (!id) {
    throw error(400, 'Please provide an ID.');
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const collection = client.db("fistsvelte").collection('users');
  const result = await collection.deleteOne({ _id: objectId });
  await client.close();

  if (!result.deletedCount) {
    throw error(404, 'Data not found.');
  }

  return new Response(collection);
}
