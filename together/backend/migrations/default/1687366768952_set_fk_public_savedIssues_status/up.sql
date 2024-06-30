alter table "public"."savedIssues" drop constraint "likes_reactionType_fkey",
  add constraint "savedIssues_status_fkey"
  foreign key ("status")
  references "public"."savedStatus"
  ("value") on update cascade on delete restrict;
