/*
  Warnings:

  - You are about to drop the `CM` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CMGrades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LW` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LWGrades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ModuleGrades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SemGrades` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CM" DROP CONSTRAINT "CM_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "CMGrades" DROP CONSTRAINT "CMGrades_cmId_fkey";

-- DropForeignKey
ALTER TABLE "CMGrades" DROP CONSTRAINT "CMGrades_studentId_fkey";

-- DropForeignKey
ALTER TABLE "LW" DROP CONSTRAINT "LW_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "LWGrades" DROP CONSTRAINT "LWGrades_lrId_fkey";

-- DropForeignKey
ALTER TABLE "LWGrades" DROP CONSTRAINT "LWGrades_studentId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleGrades" DROP CONSTRAINT "ModuleGrades_moduleId_fkey";

-- DropForeignKey
ALTER TABLE "ModuleGrades" DROP CONSTRAINT "ModuleGrades_studentId_fkey";

-- DropForeignKey
ALTER TABLE "SemGrades" DROP CONSTRAINT "SemGrades_seminarId_fkey";

-- DropForeignKey
ALTER TABLE "SemGrades" DROP CONSTRAINT "SemGrades_studentId_fkey";

-- DropTable
DROP TABLE "CM";

-- DropTable
DROP TABLE "CMGrades";

-- DropTable
DROP TABLE "LW";

-- DropTable
DROP TABLE "LWGrades";

-- DropTable
DROP TABLE "ModuleGrades";

-- DropTable
DROP TABLE "SemGrades";

-- CreateTable
CREATE TABLE "ControlWork" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "ControlWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaboratoryWork" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "LaboratoryWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuleGrade" (
    "id" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,

    CONSTRAINT "ModuleGrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControlWorkGrade" (
    "id" TEXT NOT NULL,
    "grade" "TaskStatus",
    "studentId" TEXT NOT NULL,
    "cmId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ControlWorkGrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaboratoryWorkGrade" (
    "id" TEXT NOT NULL,
    "grade" "TaskStatus",
    "studentId" TEXT NOT NULL,
    "lrId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaboratoryWorkGrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SemGrade" (
    "id" TEXT NOT NULL,
    "grade" "SemStatus",
    "studentId" TEXT NOT NULL,
    "seminarId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SemGrade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ControlWork" ADD CONSTRAINT "ControlWork_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaboratoryWork" ADD CONSTRAINT "LaboratoryWork_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleGrade" ADD CONSTRAINT "ModuleGrade_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleGrade" ADD CONSTRAINT "ModuleGrade_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControlWorkGrade" ADD CONSTRAINT "ControlWorkGrade_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControlWorkGrade" ADD CONSTRAINT "ControlWorkGrade_cmId_fkey" FOREIGN KEY ("cmId") REFERENCES "ControlWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaboratoryWorkGrade" ADD CONSTRAINT "LaboratoryWorkGrade_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaboratoryWorkGrade" ADD CONSTRAINT "LaboratoryWorkGrade_lrId_fkey" FOREIGN KEY ("lrId") REFERENCES "LaboratoryWork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SemGrade" ADD CONSTRAINT "SemGrade_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SemGrade" ADD CONSTRAINT "SemGrade_seminarId_fkey" FOREIGN KEY ("seminarId") REFERENCES "Seminar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
