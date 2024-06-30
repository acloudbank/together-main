alter table "public"."letterContents"
  add constraint "letterContents_letterId_fkey"
  foreign key ("letterId")
  references "public"."letters"
  ("id") on update cascade on delete restrict;
