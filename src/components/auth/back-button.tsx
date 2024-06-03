import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProp {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: BackButtonProp) {
  return (
    <Button variant="link" className="font-normal w-full" size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
