-- CreateTable
CREATE TABLE "Perp" (
    "id" TEXT NOT NULL,
    "ID1" TEXT NOT NULL,
    "ID2" TEXT NOT NULL,
    "DETDESC" TEXT NOT NULL,
    "WEBSITEURL" TEXT NOT NULL,
    "IMAGEURL" TEXT NOT NULL,
    "DETDESCURL" TEXT NOT NULL,
    "SVCOUT" DOUBLE PRECISION NOT NULL,
    "LROUT" DOUBLE PRECISION NOT NULL,
    "FULLNAME" TEXT NOT NULL,
    "WEBID" TEXT NOT NULL,
    "PERPDESC" TEXT NOT NULL,

    CONSTRAINT "Perp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerpPublic" (
    "id" TEXT NOT NULL,
    "ID1" TEXT NOT NULL,
    "IMAGEURL" TEXT NOT NULL,
    "VIEWCOUNT" INTEGER NOT NULL,
    "FULLNAME" TEXT NOT NULL,
    "WEBID" TEXT NOT NULL,
    "PERPDESC" TEXT NOT NULL,
    "perpId" TEXT NOT NULL,

    CONSTRAINT "PerpPublic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerpVotes" (
    "id" TEXT NOT NULL,
    "ID1" TEXT NOT NULL,
    "ID2" TEXT NOT NULL,
    "WEBID" TEXT NOT NULL,
    "notCancelledCount" INTEGER NOT NULL,
    "cancelledCount" INTEGER NOT NULL,
    "sexualCount" INTEGER NOT NULL,
    "domesticViolenceCount" INTEGER NOT NULL,
    "discriminationCount" INTEGER NOT NULL,
    "otherCount" INTEGER NOT NULL,
    "unsureCount" INTEGER NOT NULL,
    "perpId" TEXT NOT NULL,

    CONSTRAINT "PerpVotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PerpPublic_perpId_key" ON "PerpPublic"("perpId");

-- CreateIndex
CREATE UNIQUE INDEX "PerpVotes_perpId_key" ON "PerpVotes"("perpId");

-- AddForeignKey
ALTER TABLE "PerpPublic" ADD CONSTRAINT "PerpPublic_perpId_fkey" FOREIGN KEY ("perpId") REFERENCES "Perp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerpVotes" ADD CONSTRAINT "PerpVotes_perpId_fkey" FOREIGN KEY ("perpId") REFERENCES "Perp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
