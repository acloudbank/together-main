alter table "public"."letters"
  add constraint "letters_language_fkey"
  foreign key ("language")
  references "public"."language"
  ("value") on update cascade on delete restrict;
