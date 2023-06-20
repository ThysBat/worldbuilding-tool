import Card from "../Card";
import Link from "next/link";

export default function LinkedCard({ children, href = "/" }) {
  return (
    <Link href={href}>
      <Card>{children}</Card>
    </Link>
  );
}
