import boardService from "../services/boardService.js";

const getAllBoards = async (req, res, next) => {
  try {
    const allBoards = await boardService.getAllBoards();
    res.json({
      result: "Ok",
      data: { items: allBoards.length, boards: allBoards },
    });
  } catch (error) {
    next(error);
  }
};

const getSingleBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await boardService.getSingleBoard(id);
    res.json({
      result: "Ok",
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

const createBoard = async (req, res, next) => {
  try {
    const boardData = req.body;
    const createdBoard = await boardService.createBoard(boardData);
    res.status(201).json({
      result: "Ok",
      data: createdBoard,
    });
  } catch (error) {
    next(error);
  }
};

const updateBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const boardData = req.body;
    const updatedBoard = await boardService.updateBoard(id, boardData);
    res.json({
      result: "Ok",
      data: updatedBoard,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBoard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBoard = await boardService.deleteBoard(id);
    res.json({
      result: "Ok",
      data: deletedBoard,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllBoards,
  getSingleBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
