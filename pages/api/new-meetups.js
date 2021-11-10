import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const connectedClient = await MongoClient.connect(
      "mongodb+srv://rohit4java:rohitnext241292@cluster0.icluy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = connectedClient.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    connectedClient.close();

    res.status(201).json({ message: "meetup inserted!" });
  }
}

export default handler;
