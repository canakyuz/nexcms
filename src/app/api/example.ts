import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise
    const db = client.db("your_database_name")

    // Use the database for operations
    const collection = db.collection("your_collection_name")
    const result = await collection.findOne({})

    res.json(result)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Unable to connect to database' })
  }
}