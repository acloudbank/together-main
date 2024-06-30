alter table "public"."savedIssues" drop constraint "savedIssues_status_fkey",
  add constraint "likes_reactionType_fkey"
  foreign key ("status")
  references "public"."savedStatus"
  ("value") on update cascade on delete restrict;
