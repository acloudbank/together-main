alter table "public"."issues" drop constraint "issues_userId_fkey",
  add constraint "issues_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update cascade on delete restrict;
