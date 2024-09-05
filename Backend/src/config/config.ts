import dotenv from "dotenv";

dotenv.config();   
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const PORT = Number(process.env.PORT) || 5000;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@book-store.pkprs.mongodb.net/`;
export const config = {
    mongo: {
        uri: MONGO_URI,
        },
    port: PORT

    }