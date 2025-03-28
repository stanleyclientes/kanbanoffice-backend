import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, //Tem um title
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }], //contém array de Lists
  },
  { timestamps: true }
);

export const Board = mongoose.model("Board", boardSchema);
