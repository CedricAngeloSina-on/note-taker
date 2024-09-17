"use client";
import { X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "~/components/shadcn/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/shadcn/dialog";

import { api } from "~/trpc/react";

export default function TopicList() {
  const utils = api.useUtils();

  const [topics] = api.topic.getTopics.useSuspenseQuery();

  const deleteTopic = api.topic.delete.useMutation({
    onMutate: () => {
      toast.loading("Deleting topic...");
    },
    onSuccess: async () => {
      await utils.topic.invalidate();
      toast.success("Topic deleted!", { duration: 2000 });
    },
    onError: (error) => {
      toast.error(`Failed to delete topic: ${error.message}`);
    },
    onSettled: () => {
      toast.dismiss();
    },
  });

  function onSubmit(topicId: number) {
    deleteTopic.mutate({
      id: topicId,
    });
  }

  return (
    <div className="flex flex-col justify-between px-2">
      {topics.map((topic) => (
        <div
          className="flex flex-row items-center justify-between"
          key={topic.id}
        >
          <Button variant="ghost" type="submit">
            {topic.title}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="h-8 p-2" type="submit">
                <X className="h-3.5 w-3.5" />
              </Button>
            </DialogTrigger>
            <DialogTitle className="hidden">Delete Topic Form</DialogTitle>
            <DialogDescription className="hidden">
              Delete Topic Form
            </DialogDescription>
            <DialogContent className="sm:max-w-md">
              {topic.title} from topics?
              <div className="flex flex-row justify-end gap-2">
                <DialogClose asChild>
                  <Button
                    variant="destructive"
                    onClick={() => onSubmit(topic.id)}
                  >
                    Yes
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    No
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}
