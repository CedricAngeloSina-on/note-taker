import { Book, Menu } from "lucide-react";

import { Button } from "~/components/shadcn/button";
import { Hero } from "~/components/hero";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/components/shadcn/sheet";
import { ThemeToggle } from "~/components/theme-toggle";

export default async function Home() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center gap-2 border-b px-4 font-semibold lg:h-[60px] lg:px-6">
            <Book className="size-6" />
            <span>ICARE</span>
          </div>
          {/* {session?.user && (
              <div className="flex-1">
                <nav className="grid items-start text-lg font-medium lg:px-4">
                  <span className="flex justify-between px-2 py-2 text-muted-foreground">
                    <div className="flex items-center justify-between gap-x-1.5">
                      <StickyNote className="size-5" />
                      Messages
                    </div>
                    <TopicDialog />
                  </span>
                  <TopicList />
                </nav>
              </div>
            )} */}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetTitle className="hidden">Mobile Menu</SheetTitle>
            <SheetDescription className="hidden">
              Mobile menu for ICARE.
            </SheetDescription>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Book className="size-6" />
                  <span>ICARE</span>
                </div>
                {/* {session?.user && (
                    <>
                      <span className="flex justify-between px-3 py-2 text-muted-foreground">
                        <div className="flex items-center justify-between gap-3">
                          <StickyNote className="size-4" />
                          Messages
                        </div>
                        <TopicDialog />
                      </span>
                      <TopicList />
                    </>
                  )} */}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="ml-auto flex items-center space-x-3">
            <ThemeToggle />
            {/* <AuthButton session={session} /> */}
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 lg:gap-6 lg:p-6">
          {/* {session ? (
              <div className="flex flex-col items-center justify-between text-5xl font-semibold">
                <h1>NOTES</h1>
              </div>
            ) : (
              <Hero />
            )} */}
          <Hero />
        </main>
      </div>
    </div>
  );
}
