"use client";
import { api } from "~/trpc/react";

export default function TopicList() {
  const [topics] = api.topic.getTopics.useSuspenseQuery();

  return (
    <div className="flex flex-col items-center justify-between px-3 py-2 text-2xl text-muted-foreground">
      {topics.map((topic) => (
        <span key={topic.id}>{topic.title}</span>
      ))}
    </div>
  );
}
