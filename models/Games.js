import { Schema, model, Types } from "mongoose";

let collection = "games"; //games
let schema = new Schema(
  {
    // author_id: {type: Types.ObjectId, ref: 'authors', required: true},
    company_id: { type: String, required: true }, //ya esta
    title: { type: String, required: true }, //ya esta
    cover_photo: { type: String, required: true }, //ya esta
    description: { type: String }, //ya esta
    price: { type: Number, required: true }, // no esta
    keys: { type: Array }, // no esta
    rating_pos: { type: Number },
    rating_neg: { type: Number },
    category_id: { type: Types.ObjectId, ref: "categories", required: true }, //ya esta
  },
  {
    timestamps: true,
  }
);

let Manga = model(collection, schema);
export default Manga;

//modelo GAMES ---------------
