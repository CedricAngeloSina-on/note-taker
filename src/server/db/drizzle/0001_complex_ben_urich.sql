ALTER TABLE "note-taker_note" DROP CONSTRAINT "note-taker_note_topic_id_note-taker_topic_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "note-taker_note" ADD CONSTRAINT "note-taker_note_topic_id_note-taker_topic_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."note-taker_topic"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
