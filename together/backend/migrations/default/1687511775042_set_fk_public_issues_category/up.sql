alter table "public"."issues"
  add constraint "issues_category_fkey"
  foreign key ("category")
  references "public"."issueCategory"
  ("value") on update restrict on delete cascade;
