alter table "public"."users"
  add constraint "users_source_fkey"
  foreign key ("source")
  references "public"."userSource"
  ("value") on update cascade on delete restrict;
