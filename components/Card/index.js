import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  width: var(--card-size);
  height: var(--card-size);

  background-color: lightblue;
  padding: 1rem;

  border-radius: 1.6rem;
`;

export default function Card({ children }) {
  return <StyledLink href="/">{children}</StyledLink>;
}
