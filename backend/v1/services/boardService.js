import Board from "../database/boardDAL.js";

const getAllBoards = async () => {
  try {
    const allBoards = await Board.getAllBoards();
    return allBoards;
  } catch (error) {
    throw error;
  }
};

const getSingleBoard = async (boardId) => {
  try {
    const board = await Board.getSingleBoard(boardId);
    return board;
  } catch (error) {
    throw error;
  }
};

const createBoard = async (data) => {
  try {
    const board = await Board.createBoard(data);
    return board;
  } catch (error) {
    throw error;
  }
};

const updateBoard = async (boardId, data) => {
  try {
    const updatedBoard = await Board.updateBoard(boardId, data);
    return updatedBoard;
  } catch (error) {
    throw error;
  }
};

const deleteBoard = async (boardId) => {
  try {
    const deletedBoard = await Board.deleteBoard(boardId);
    return deletedBoard;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllBoards,
  getSingleBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
