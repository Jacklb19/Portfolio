/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `GuestbookEntry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GuestbookEntry" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3);
