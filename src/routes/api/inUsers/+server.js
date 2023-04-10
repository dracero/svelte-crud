import { error } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://root:juana99@cluster0.zf9fl.mongodb.net/?retryWrites=true&w=majority';

// @ts-ignore
export async function POST({request}){
   const body = await request.json()
   let name = body.name;
   let surname = body.surname;
   let email = body.email;
   if (!name || !surname || !email) {
    throw error(400, 'Please provide all required fields.');
  } 
  // @ts-ignore
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const collection = client.db("fistsvelte").collection('users');
  const result = await collection.insertOne({ name, surname, email });
  await client.close();

  if (!result) {
    throw error(500, 'Failed to insert data.');
  }

  // @ts-ignore
  return new Response(collection);
}
