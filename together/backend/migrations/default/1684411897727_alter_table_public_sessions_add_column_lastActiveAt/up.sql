alter table "public"."sessions" add column "lastActiveAt" timestamptz
 not null default now();
