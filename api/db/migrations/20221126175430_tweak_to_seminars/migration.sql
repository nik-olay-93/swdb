/*
  Warnings:

  - You are about to drop the column `week` on the `Seminar` table. All the data in the column will be lost.
  - Added the required column `description` to the `Seminar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Seminar" DROP COLUMN "week",
ADD COLUMN     "description" TEXT NOT NULL;
