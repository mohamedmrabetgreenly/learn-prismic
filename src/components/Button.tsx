import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function Button({ className, ...props }: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-300 ease-in-out text-white py-3 px-12 rounded-full font-display font-bold text-base text-center tracking-wider",
        className
      )}
      {...props}
    />
  );
}
