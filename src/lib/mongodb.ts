import { MongoClient, MongoClientOptions } from "mongodb";

// MongoClient is attached to the `global` object in development
// to prevent exhausting the database connection limit.

declare global {
  var client: MongoClient;
  var _mongoClientPromise: Promise<MongoClient>;
}
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const options: MongoClientOptions = {};
const mongoUri = process.env.DATABASE_URL ?? "";

if (process.env.NODE_ENV === "development") {
 if (!global._mongoClientPromise) {

    global.client = new MongoClient(mongoUri, options);
    global._mongoClientPromise = global.client.connect();
  }
  client = global.client;
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(mongoUri, options);
  clientPromise = client.connect();
}

export default clientPromise;
