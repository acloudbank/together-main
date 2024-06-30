alter table "public"."users" alter column "emailVerified" drop not null;
alter table "public"."users" add column "emailVerified" timestamptz;
