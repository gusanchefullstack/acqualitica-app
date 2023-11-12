-- CreateTable
CREATE TABLE "Sensor" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "boardId" TEXT NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
