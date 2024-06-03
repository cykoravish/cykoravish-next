interface AuthHeaderProp {
  label: string;
  title: string;
}

export default function AuthHeader({ label, title }: AuthHeaderProp) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{label}</p>
    </div>
  );
}
