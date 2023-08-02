import { Schema, model, Types } from "mongoose";

let collection = "chapters";
let schema = new Schema(
  {
    manga_id: { type: String, required: true },
    title: { type: String },
    cover_photo: { type: String, required: true },
    pages: { type: Array },
    order: { type: Number },
  },
  {
    timestamps: true,
  }
);

let Chapter = model(collection, schema);
export default Chapter;
