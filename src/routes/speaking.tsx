import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/speaking")({
  beforeLoad: () => {
    throw redirect({ to: "/lectures", hash: "speaking" });
  },
});
