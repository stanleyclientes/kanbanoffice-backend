import express from "express";
import { List } from "../models/listsModel.js";
import { Board } from "../models/boardsModel.js";

const router = express.Router();

// Criar uma List dentro de um Board
router.post("/lists/post", async (req, res) => {
  try {
    const list = new List({ title: req.body.title, board: req.body.boardId });
    await list.save();

    await Board.findByIdAndUpdate(req.body.boardId, { $push: { lists: list._id } });

    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar todas as Lists de um Board
router.get("/lists/get/:boardId", async (req, res) => {
  try {
    const lists = await List.find({ board: req.params.boardId }).populate("cards");
    res.json(lists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
