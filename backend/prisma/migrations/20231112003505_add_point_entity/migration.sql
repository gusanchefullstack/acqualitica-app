-- CreateTable
CREATE TABLE "Point" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "latlng" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
