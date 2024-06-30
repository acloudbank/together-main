alter table "public"."issues"
  add constraint "issues_fieldViewScale_fkey"
  foreign key ("fieldViewScale")
  references "public"."issueFieldViewScale"
  ("value") on update cascade on delete restrict;
