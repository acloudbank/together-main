alter table "public"."letters"
  add constraint "letters_status_fkey"
  foreign key ("status")
  references "public"."letterStatus"
  ("value") on update restrict on delete cascade;
