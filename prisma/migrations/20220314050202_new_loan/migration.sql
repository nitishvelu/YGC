/*
  Warnings:

  - You are about to drop the column `body` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenure` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "body",
DROP COLUMN "title",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "paid" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "phone" INTEGER NOT NULL,
ADD COLUMN     "tenure" INTEGER NOT NULL;
