import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Tem title
    description: { type: String }, // Tem description
    list: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: true }, // Pertence a Lists
  },
  { timestamps: true }
);

export const Card = mongoose.model("Card", cardSchema);
