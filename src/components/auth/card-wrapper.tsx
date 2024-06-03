import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AuthHeader from "./auth-header";
import BackButton from "./back-button";

interface CardwrapperProp {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

export default function CardWrapper({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: CardwrapperProp) {
  return (
    <Card>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
