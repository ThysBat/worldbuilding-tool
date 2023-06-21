import styled from "styled-components";

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;
