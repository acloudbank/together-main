alter table "public"."shares"
  add constraint "shares_issueId_fkey"
  foreign key ("issueId")
  references "public"."issues"
  ("id") on update cascade on delete restrict;
