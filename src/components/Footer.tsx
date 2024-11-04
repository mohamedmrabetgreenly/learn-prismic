import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer>
      <Link href="/">{settings.data.site_title}</Link>
      <p>
        © {new Date().getFullYear()} {settings.data.site_title}
      </p>
      <ul>
        {settings.data.navigation.map((item, index) => {
          return (
            <li key={`${item.link}-${item.label}-${index}`}>
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
