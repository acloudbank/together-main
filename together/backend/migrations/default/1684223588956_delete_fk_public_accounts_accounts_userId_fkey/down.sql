alter table "public"."accounts"
  add constraint "accounts_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete cascade;
