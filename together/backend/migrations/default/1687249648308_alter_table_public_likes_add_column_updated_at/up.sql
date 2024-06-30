alter table "public"."likes" add column "updated_at" timestamptz
 null default now();
