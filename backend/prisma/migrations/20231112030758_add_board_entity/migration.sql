-- CreateTable
CREATE TABLE "Board" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "pointId" TEXT NOT NULL,

    CONSTRAINT "Board_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "Point"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
