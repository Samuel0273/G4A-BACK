import { Schema, Types, model } from "mongoose";

let collection = "categories";
let schema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String },
    hover: { type: String },
    // description: {type: String},
    // cover_photo: {type: String, required: true},
    // character_photo:{type: String},
    // admin_id:{type: Types.ObjectId, required:true, ref:'users'}
  },
  {
    timestamps: true,
  }
);

let Category = model(collection, schema);

export default Category;
