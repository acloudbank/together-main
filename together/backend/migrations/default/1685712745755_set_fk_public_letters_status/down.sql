alter table "public"."letters" drop constraint "letters_status_fkey",
  add constraint "letters_status_fkey"
  foreign key ("status")
  references "public"."letterStatus"
  ("value") on update restrict on delete cascade;
