alter table "public"."issues" drop constraint "issues_category_fkey",
  add constraint "issues_category_fkey"
  foreign key ("category")
  references "public"."issueCategory"
  ("value") on update restrict on delete cascade;
