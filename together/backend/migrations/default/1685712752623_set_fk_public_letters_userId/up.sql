alter table "public"."letters" drop constraint "letters_userId_fkey",
  add constraint "letters_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update cascade on delete restrict;
