-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "goodGrade" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "maxGrade" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "minGrade" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "okGrade" INTEGER NOT NULL DEFAULT 0;
