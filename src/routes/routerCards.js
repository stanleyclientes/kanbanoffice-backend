import express from "express";
import { Card } from "../models/cardsModel.js";
import { List } from "../models/listsModel.js";

const router = express.Router();

// Criar um Card dentro de uma List
router.post("/cards/post", async (req, res) => {
  try {
    const card = new Card({
      title: req.body.title,
      description: req.body.description,
      list: req.body.listId,
    });
    await card.save();

    await List.findByIdAndUpdate(req.body.listId, { $push: { cards: card._id } });

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar todos os Cards de uma List
router.get("/cards/get/:listId", async (req, res) => {
  try {
    const cards = await Card.find({ list: req.params.listId });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
