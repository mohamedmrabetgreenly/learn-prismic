import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Component = "section",
  className,
  children,
  ...props
}: BoundedProps) {
  return (
    <Component
      className={clsx(
        "px-4 py-10 md:py-14 md:px-6 lg:px-8 lg:py-16",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}
