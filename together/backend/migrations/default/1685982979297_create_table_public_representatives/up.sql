CREATE TABLE "public"."representatives" ("firstname" text NOT NULL, "id" uuid NOT NULL DEFAULT gen_random_uuid(), "lastname" text NOT NULL, "middlename" text, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
