import { config } from "./config/config";
import mongoose from "mongoose"; 
import app from "./app";   

const start = async () => {
    try {
        await mongoose.connect(config.mongo.uri);
        console.log('Database connected successfully');
        
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
        
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    
}
}

start();