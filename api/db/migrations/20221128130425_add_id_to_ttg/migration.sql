/*
  Warnings:

  - The primary key for the `TeacherToGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[teacherId,groupId,subjectId]` on the table `TeacherToGroup` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `TeacherToGroup` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "TeacherToGroup" DROP CONSTRAINT "TeacherToGroup_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "TeacherToGroup_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherToGroup_teacherId_groupId_subjectId_key" ON "TeacherToGroup"("teacherId", "groupId", "subjectId");
