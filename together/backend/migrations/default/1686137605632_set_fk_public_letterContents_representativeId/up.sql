alter table "public"."letterContents"
  add constraint "letterContents_representativeId_fkey"
  foreign key ("representativeId")
  references "public"."representatives"
  ("id") on update cascade on delete restrict;
