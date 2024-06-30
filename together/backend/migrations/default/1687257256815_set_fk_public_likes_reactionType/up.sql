alter table "public"."likes"
  add constraint "likes_reactionType_fkey"
  foreign key ("reactionType")
  references "public"."reactionType"
  ("value") on update cascade on delete restrict;
