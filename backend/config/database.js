import mongoose from "mongoose";
import Course from "../models/Course.js";
import courseCatalog from "../data/courseCatalog.json" with { type: "json" };
import courseDetails from "../data/courseDetails.json" with { type: "json" };
import "./env.js";

let connectionPromise;

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

async function seedCourses() {
  const operations = courseCatalog.map(({ title, price, duration, rating }) => {
    const details = courseDetails[title];
    if (!details) throw new Error(`Missing course details for ${title}`);
    return {
      updateOne: {
        filter: { _id: slugify(title) },
        update: { $set: { title, price, duration, rating, details } },
        upsert: true,
      },
    };
  });
  await Course.bulkWrite(operations);
}

export async function connectDatabase() {
  const { MONGODB_URI } = process.env;
  if (!MONGODB_URI) throw new Error("MONGODB_URI is required to connect to MongoDB.");
  if (mongoose.connection.readyState === 1) return mongoose.connection;

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 10,
    })
      .then(async () => {
        await seedCourses();
        return mongoose.connection;
      })
      .catch((error) => {
        connectionPromise = undefined;
        throw error;
      });
  }

  return connectionPromise;
}

mongoose.connection.on("disconnected", () => {
  connectionPromise = undefined;
});
