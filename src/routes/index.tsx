import HomePage from "@/pages/home/HomePage";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/weather/$period", params: { period: "today" } });
  },
  component: HomePage,
});
