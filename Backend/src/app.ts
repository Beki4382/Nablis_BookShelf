import express from "express";
import userRoute from "./features/user/routes/user";
import bookRoute from "./features/book/routes/book";
import { Database } from "./helper/dataBase";
import { config } from "./config/config";

const app = express();
app.use(express.json());
// app.use('/api/auth', authRoute);
app.use('/api/profile', userRoute);
app.use('/api/book', bookRoute);
// app.use('/api/catalog', catalogRoute);
// app.use('/api/wishlist', wishlistRoute);
// app.use('/api/review', reviewRoute);


export default app;

