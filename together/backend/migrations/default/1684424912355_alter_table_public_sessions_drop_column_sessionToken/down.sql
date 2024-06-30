alter table "public"."sessions" alter column "sessionToken" drop not null;
alter table "public"."sessions" add column "sessionToken" text;
