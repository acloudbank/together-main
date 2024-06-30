alter table "public"."savedIssues"
  add constraint "savedIssues_status_fkey"
  foreign key ("status")
  references "public"."savedStatus"
  ("value") on update cascade on delete restrict;
