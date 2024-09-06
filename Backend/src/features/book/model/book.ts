import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
    title: string;
    author: string;
    price : number;
    publishedDate : Date;
    genre : string;
    image : string;
    rating : number;
    quantity : number;
    detail: string;
}

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price : { type: Number, require: true},
    publishedDate : { type: Date, required: true },
    genre:{ type : String, require : true},
    rating : { type: Number},
    detail:{ type: String},
    quantity : { type: Number},
    image : { type: String}
    
});

export default mongoose.model<IBook>("Book", bookSchema);
