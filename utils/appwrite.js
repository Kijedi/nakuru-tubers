"use server";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { ID, Query } from "appwrite"; // import { account } from "./appwrite";
// import { createSessionClient } from "./appwrite";
// import { DateTime } from "luxon";
import { Databases, Client, Account, Query, ID } from "node-appwrite";

let client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your Appwrite Project
  .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY); // Your// Your secret API key

const databases = new Databases(client);

export const getProducts = async () =>
  (
    await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_CATEGORIES,
      [Query.orderAsc("category_name")]
    )
  ).documents;

  export const placeOrder = async (orderDetails) => {
    try {
      const response = await databases.upsertDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ONLINE_ORDERS,
        ID.unique(),
        orderDetails
      );
      return response;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  };
