-- CreateTable
CREATE TABLE "Teacher" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "TeacherToGroup" (
    "teacherId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeacherToGroup_pkey" PRIMARY KEY ("teacherId","groupId","subjectId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_userId_key" ON "Teacher"("userId");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherToGroup" ADD CONSTRAINT "TeacherToGroup_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherToGroup" ADD CONSTRAINT "TeacherToGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherToGroup" ADD CONSTRAINT "TeacherToGroup_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
