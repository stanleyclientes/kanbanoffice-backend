import express from "express";
import { Board } from "../models/boardsModel.js";

const router = express.Router();

// Criar um Board
router.post("/boards/post", async (req, res) => {
  try {
    const board = new Board({ title: req.body.title });
    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar todos os Boards
router.get("/boards/get", async (req, res) => {
  try {
    const boards = await Board.find().populate("lists");
    res.json(boards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get", async (req, res) => {
  res.json({ title: 'oi' });
});

export default router;
