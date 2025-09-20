import { createFileRoute, notFound } from "@tanstack/react-router";
import { z } from "zod";
import WebsiteBuilderPage from "./home/WebsiteBuilderPage";

export const Route = createFileRoute("/_authenticate/")({
  component: WebsiteBuilderPage,
  validateSearch: z.object({
    id: z.string().optional(),
  }),
  beforeLoad: ({ search }) => {
    if (!search.id) throw notFound({data:{ message: "No template selected"}});
  } 
});

