import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProp {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: BackButtonProp) {
  return (
    <Button>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
