/*
  Warnings:

  - You are about to drop the column `audio` on the `MediaProvider` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MediaProvider" DROP COLUMN "audio",
ADD COLUMN     "audios" TEXT[] DEFAULT ARRAY[]::TEXT[];
