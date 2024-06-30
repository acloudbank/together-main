alter table "public"."likes"
  add constraint "likes_issueId_fkey"
  foreign key ("issueId")
  references "public"."issues"
  ("id") on update cascade on delete restrict;