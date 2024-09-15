"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/shadcn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/shadcn/form";
import { Input } from "~/components/shadcn/input";

import { toast } from "sonner";

const formSchema = z.object({
  topic: z
    .string()
    .min(3, { message: "Topic title must be at least 3 characters." })
    .max(50, { message: "Topic title must be at most 50 characters." }),
});

export default function TopicForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("New topic created!", { duration: 2000 });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic Title</FormLabel>
              <FormDescription>
                A subject that you want to take down notes.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <div className="h-0">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
