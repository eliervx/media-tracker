/*
  Warnings:

  - The primary key for the `MediaProvider` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "MediaProvider" DROP CONSTRAINT "MediaProvider_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MediaProvider_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MediaProvider_id_seq";
