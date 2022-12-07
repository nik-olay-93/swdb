-- CreateEnum
CREATE TYPE "TeacherAssignment" AS ENUM ('ControlWork', 'LaboratoryWork', 'Seminar');

-- AlterTable
ALTER TABLE "TeacherToGroup" ADD COLUMN     "assignment" "TeacherAssignment"[];
