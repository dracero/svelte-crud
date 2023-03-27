import { error } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const uri = 'mongodb+srv://root:juana99@cluster0.zf9fl.mongodb.net/?retryWrites=true&w=majority';

export async function PUT({request, url}){
   const id = url.searchParams.get('id'); 
   const objectId = new ObjectId(id);
   const body = await request.json()
   let name = body.name;
   let surname = body.surname;
   let email = body.email;
   console.log(name, surname, email, id)
   if (!name || !surname || !email) {
    throw error(400, 'Please provide all required fields.');
  } 
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const collection = client.db("fistsvelte").collection('users');
  const result = await collection.updateOne(
    { _id: objectId },
    { $set: { name: name, surname:surname, email:email } }
  );
  await client.close();

  if (!result) {
    throw error(500, 'Failed to update data.');
  }

  return new Response(collection);
}
