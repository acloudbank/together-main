alter table "public"."sessions"
  add constraint "sessions_type_fkey"
  foreign key ("type")
  references "public"."sessionType"
  ("value") on update cascade on delete restrict;
