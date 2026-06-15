import Link from "next/link";
import { ComponentProps } from "react";

export default function CustomLink(props: ComponentProps<typeof Link>) {
  return <Link prefetch={false} {...props} />;
}
