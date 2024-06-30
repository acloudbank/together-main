CREATE TABLE "public"."letters" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "userName" text NOT NULL, "userSurname" text NOT NULL, "state" text NOT NULL, "city" text NOT NULL, "street" text NOT NULL, "unit" text NOT NULL, "userId" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE cascade, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
