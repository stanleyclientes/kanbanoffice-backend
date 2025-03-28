import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Tem title
    board: { type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true }, // Pertence ao Boards
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }], // Contém array de Cards
  },
  { timestamps: true }
);

export const List = mongoose.model("List", listSchema);
