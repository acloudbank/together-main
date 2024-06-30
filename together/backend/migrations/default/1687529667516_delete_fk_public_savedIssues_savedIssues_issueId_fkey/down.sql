alter table "public"."savedIssues"
  add constraint "savedIssues_issueId_fkey"
  foreign key ("issueId")
  references "public"."issues"
  ("id") on update cascade on delete restrict;
