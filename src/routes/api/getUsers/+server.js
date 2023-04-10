// @ts-nocheck
import { error } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://root:juana99@cluster0.zf9fl.mongodb.net/?retryWrites=true&w=majority';

export async function GET({ url }) {
  try {
    const name = url.searchParams.get('name');
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const collection = client.db("fistsvelte").collection('users');
    const data = await collection.findOne({ name });
    await client.close();
    if (!data) {
      throw error(400, 'No user exists.');
    }
    return new Response(JSON.stringify(data))
  } catch (error) {
    console.error(error.message);
    return new Response(error.status || 500)
  }
}
