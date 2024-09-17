import { Button } from "~/components/shadcn/button";

import { signIn, signOut } from "~/server/auth";
import { type Session } from "next-auth";

export async function AuthButton({
  session,
}: {
  session: Session | null;
}) {
  return (
    <form
      action={async () => {
        "use server";
        if (session) {
          await signOut();
        } else {
          await signIn("discord");
        }
      }}
    >
      <Button className="w-full" type="submit" variant="outline">
        {session ? "Sign out" : "Sign in with Discord"}
      </Button>
    </form>
  );
}
