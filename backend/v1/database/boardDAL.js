import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllBoards = async () => {
  try {
    const allBoards = await prisma.board.findMany({});
    await prisma.$disconnect();
    return allBoards;
  } catch (error) {
    throw error;
  }
};

const getSingleBoard = async (boardId) => {
  try {
    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
      include: {
        sensors: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
      },
    });
    await prisma.$disconnect();
    return board;
  } catch (error) {
    throw error;
  }
};

const createBoard = async (obj) => {
  try {
    const { name, pointId } = obj;
    const createdBoard = await prisma.board.create({
      data: {
        name,
        pointId,
      },
    });
    await prisma.$disconnect();
    return createdBoard;
  } catch (error) {
    throw error;
  }
};

const updateBoard = async (boardId, obj) => {
  try {
    const updatedBoard = await prisma.board.update({
      where: {
        id: boardId,
      },
      data: {
        ...obj,
      },
    });
    await prisma.$disconnect();
    return updatedBoard;
  } catch (error) {
    throw error;
  }
};

const deleteBoard = async (boardId) => {
  try {
    const deletedBoard = await prisma.board.delete({
      where: {
        id: boardId,
      },
    });
    await prisma.$disconnect();
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
