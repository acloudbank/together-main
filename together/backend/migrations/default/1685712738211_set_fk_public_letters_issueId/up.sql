alter table "public"."letters" drop constraint "letters_issueId_fkey",
  add constraint "letters_issueId_fkey"
  foreign key ("issueId")
  references "public"."issues"
  ("id") on update cascade on delete restrict;
