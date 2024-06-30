alter table "public"."issueStatus" alter column "issues" drop not null;
alter table "public"."issueStatus" add column "issues" uuid;
