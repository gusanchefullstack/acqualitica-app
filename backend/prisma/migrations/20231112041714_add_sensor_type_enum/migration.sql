-- CreateEnum
CREATE TYPE "SensorType" AS ENUM ('pH', 'OD', 'FLOW', 'TEMPERATURE', 'CONDUCTIVITY', 'ORP');

-- AlterTable
ALTER TABLE "Sensor" ADD COLUMN     "type" "SensorType" NOT NULL DEFAULT 'TEMPERATURE';
