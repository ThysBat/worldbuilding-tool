import Link from "next/link";
import styled from "styled-components";

const StyledSpan = styled.span`
  /* take note that the children is not centered when the card
  is too small and there is no opportunity to wrap */
  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--card-size);
  height: var(--card-size);

  background-color: lightblue;

  border-radius: 1.6rem;
  padding: 2px;
`;

export default function Card({ children, width }) {
  return <StyledSpan style={{ width: width }}>{children}</StyledSpan>;
}
