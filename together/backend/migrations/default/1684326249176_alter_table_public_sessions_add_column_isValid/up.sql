alter table "public"."sessions" add column "isValid" bool
 not null default 'true';
