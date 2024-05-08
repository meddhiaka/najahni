-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('TEACHER', 'STUDENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "SECTION" AS ENUM ('GLSI2', 'SEIOT2', 'CPI2', 'TIC');

-- CreateEnum
CREATE TYPE "REACT" AS ENUM ('NOTHING', 'LIKED', 'DISLIKED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" BOOLEAN,
    "description" TEXT,
    "newAccount" BOOLEAN DEFAULT true,
    "role" "ROLE" NOT NULL DEFAULT 'STUDENT',
    "password" TEXT,
    "image" TEXT DEFAULT 'https://www.iconsdb.com/icons/preview/purple/user-4-xxl.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cour" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "icon" TEXT,
    "cover" TEXT,
    "fileUrl" TEXT,
    "section" "SECTION" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Cour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progress" (
    "id" TEXT NOT NULL,
    "status" TEXT,
    "lastDate" TIMESTAMP(3),

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Cour" ADD CONSTRAINT "Cour_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
