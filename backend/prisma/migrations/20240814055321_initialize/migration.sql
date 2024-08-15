/*
  Warnings:

  - Added the required column `theme` to the `Diary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "savedThemes" AS ENUM ('RED', 'GREEN', 'BLUE');

-- AlterTable
ALTER TABLE "Diary" ADD COLUMN     "theme" "savedThemes" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL;
