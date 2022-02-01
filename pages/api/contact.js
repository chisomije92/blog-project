import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid parameters" });
      return;
    }

    //store in database

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.username}:${process.env.key}@cluster0.w1dc5.mongodb.net/contact-data?retryWrites=true&w=majority`
      );
    } catch (err) {
      res.status(500).json({ message: "Connection to database failed" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    res
      .status(201)
      .json({ message: "Message stored successfully", content: newMessage });
  }
};

export default handler;
