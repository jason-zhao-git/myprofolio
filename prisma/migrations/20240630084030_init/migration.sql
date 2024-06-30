-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "email" VARCHAR(255),
    "subject" VARCHAR(200),
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "show_on_guestbook" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
