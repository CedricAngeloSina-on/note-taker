"use client";
import { api } from "~/trpc/react";

export default function TopicList() {
  const [topics] = api.topic.getTopics.useSuspenseQuery();

  return (
    <div className="flex flex-col justify-between px-3">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="px-2 py-1 text-base text-muted-foreground transition-all hover:text-primary"
        >
          {topic.title}
        </div>
      ))}
    </div>
  );
}
