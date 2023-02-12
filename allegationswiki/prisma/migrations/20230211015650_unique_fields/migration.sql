/*
  Warnings:

  - A unique constraint covering the columns `[ID1]` on the table `Perp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID2]` on the table `Perp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[WEBID]` on the table `Perp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID1]` on the table `PerpPublic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[WEBID]` on the table `PerpPublic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID1]` on the table `PerpVotes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID2]` on the table `PerpVotes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Perp_ID1_key" ON "Perp"("ID1");

-- CreateIndex
CREATE UNIQUE INDEX "Perp_ID2_key" ON "Perp"("ID2");

-- CreateIndex
CREATE UNIQUE INDEX "Perp_WEBID_key" ON "Perp"("WEBID");

-- CreateIndex
CREATE UNIQUE INDEX "PerpPublic_ID1_key" ON "PerpPublic"("ID1");

-- CreateIndex
CREATE UNIQUE INDEX "PerpPublic_WEBID_key" ON "PerpPublic"("WEBID");

-- CreateIndex
CREATE UNIQUE INDEX "PerpVotes_ID1_key" ON "PerpVotes"("ID1");

-- CreateIndex
CREATE UNIQUE INDEX "PerpVotes_ID2_key" ON "PerpVotes"("ID2");
