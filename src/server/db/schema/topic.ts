import { sql } from "drizzle-orm";
import { serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createTable } from "../create-table";
import { users } from "./auth";

export const topics = createTable("topic", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
  title: varchar("title", { length: 256 }),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id),
});
