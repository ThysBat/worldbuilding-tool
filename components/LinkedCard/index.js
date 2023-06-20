import Card from "../Card";
import Link from "next/link";

export default function LinkedCard({ children }) {
  return (
    <Link href="/">
      <Card href="/">{children}</Card>
    </Link>
  );
}
