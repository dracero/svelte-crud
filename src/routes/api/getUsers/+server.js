import { error } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://root:juana99@cluster0.zf9fl.mongodb.net/?retryWrites=true&w=majority';

export async function  GET(){
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const collection = client.db("fistsvelte").collection('users');
        const data = await collection.find({}).toArray();
        await client.close();
        console.log(data)
        if (!data) {
            throw error(400, 'No product exists.');
        }
 return new Response(data);
}