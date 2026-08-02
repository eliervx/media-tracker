/*
  Warnings:

  - The primary key for the `MediaProvider` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MediaProvider` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Provider` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "MediaProvider" DROP CONSTRAINT "MediaProvider_providerId_fkey";

-- AlterTable
ALTER TABLE "MediaProvider" DROP CONSTRAINT "MediaProvider_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "providerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "MediaProvider_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Provider" DROP CONSTRAINT "Provider_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Provider_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Provider_id_seq";

-- AddForeignKey
ALTER TABLE "MediaProvider" ADD CONSTRAINT "MediaProvider_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;
