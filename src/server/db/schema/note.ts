import { sql } from "drizzle-orm";
import { integer, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createTable } from "../create-table";
import { topics } from "./topic";

export const notes = createTable("note", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
  title: varchar("title", { length: 256 }),
  content: text("content"),
  topicId: integer("topic_id")
    .notNull()
    .references(() => topics.id, { onDelete: "cascade" }),
});
