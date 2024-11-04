import { Metadata } from "next";
import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <div className="text-sky-400">Homepage</div>;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
