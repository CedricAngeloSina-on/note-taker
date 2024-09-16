import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { topics } from "~/server/db/schema/topic";

export const topicRouter = createTRPCRouter({
  getTopics: protectedProcedure.query(async ({ ctx }) => {
    const topicsList = await ctx.db.select().from(topics).orderBy(topics.title);
    return topicsList ?? null;
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(topics).values({
        title: input.title,
        userId: ctx.session.user.id,
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
