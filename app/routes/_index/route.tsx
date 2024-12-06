// Root Lauyout
import type { MetaFunction } from "@remix-run/node";

import SignUp from "./signup-form";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <main>
      <h1 className="text-3xl font-semibold">Bare Metal Remix</h1>
      <br />
      <SignUp />
    </main>
  );
}
