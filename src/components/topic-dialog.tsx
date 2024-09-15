import { Button } from "~/components/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/shadcn/dialog";
import TopicForm from "~/components//topic-form";

export default function TopicDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Topic</Button>
      </DialogTrigger>
      <DialogTitle className="hidden">Topic Form</DialogTitle>
      <DialogDescription className="hidden">Topic Form</DialogDescription>
      <DialogContent className="sm:max-w-md">
        <TopicForm />
      </DialogContent>
    </Dialog>
  );
}
