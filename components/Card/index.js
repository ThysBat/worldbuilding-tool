import styled from "styled-components";

const StyledSpan = styled.span`
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
