CREATE TABLE "public"."likes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "userId" UUID NOT NULL, "issueId" uuid NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
