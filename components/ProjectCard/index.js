import LinkedCard from "../LinkedCard";

export default function ProjectCard({ children, href }) {
  return <LinkedCard href={href}>{children}</LinkedCard>;
}
