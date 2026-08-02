/*
  Warnings:

  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LanguageToMediaProvider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LanguageToMediaProvider" DROP CONSTRAINT "_LanguageToMediaProvider_A_fkey";

-- DropForeignKey
ALTER TABLE "_LanguageToMediaProvider" DROP CONSTRAINT "_LanguageToMediaProvider_B_fkey";

-- AlterTable
ALTER TABLE "MediaProvider" ADD COLUMN     "audio" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "subtitles" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "_LanguageToMediaProvider";
