/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Provider_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Provider_id_key" ON "Provider"("id");
