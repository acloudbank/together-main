alter table "public"."letters"
  add constraint "letters_issueId_fkey"
  foreign key ("issueId")
  references "public"."issues"
  ("id") on update restrict on delete cascade;
