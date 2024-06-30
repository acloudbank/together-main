alter table "public"."savedIssues"
  add constraint "likes_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update cascade on delete restrict;
