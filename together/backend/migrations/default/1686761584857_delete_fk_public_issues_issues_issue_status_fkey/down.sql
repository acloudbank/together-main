alter table "public"."issues"
  add constraint "issues_issue_status_fkey"
  foreign key ("status")
  references "public"."issueStatus"
  ("value") on update cascade on delete restrict;
