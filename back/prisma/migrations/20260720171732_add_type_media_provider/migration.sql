/*
  Warnings:

  - Added the required column `type` to the `MediaProvider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MediaProvider" ADD COLUMN     "type" TEXT NOT NULL;
