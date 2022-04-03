/*
  Warnings:

  - Added the required column `reciever` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "reciever" TEXT NOT NULL;
