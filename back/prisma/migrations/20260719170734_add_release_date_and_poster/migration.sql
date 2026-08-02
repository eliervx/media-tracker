/*
  Warnings:

  - You are about to drop the `_LanguageToMedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LanguageToMedia" DROP CONSTRAINT "_LanguageToMedia_A_fkey";

-- DropForeignKey
ALTER TABLE "_LanguageToMedia" DROP CONSTRAINT "_LanguageToMedia_B_fkey";

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "posterPath" TEXT,
ADD COLUMN     "releaseDate" TIMESTAMP(3);

-- DropTable
DROP TABLE "_LanguageToMedia";

-- CreateTable
CREATE TABLE "_LanguageToMediaProvider" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LanguageToMediaProvider_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_LanguageToMediaProvider_B_index" ON "_LanguageToMediaProvider"("B");

-- AddForeignKey
ALTER TABLE "_LanguageToMediaProvider" ADD CONSTRAINT "_LanguageToMediaProvider_A_fkey" FOREIGN KEY ("A") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToMediaProvider" ADD CONSTRAINT "_LanguageToMediaProvider_B_fkey" FOREIGN KEY ("B") REFERENCES "MediaProvider"("id") ON DELETE CASCADE ON UPDATE CASCADE;
