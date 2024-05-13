/*
  Warnings:

  - Added the required column `likes` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "comment" TEXT,
ADD COLUMN     "imageLink" TEXT,
ADD COLUMN     "likes" INTEGER NOT NULL;
