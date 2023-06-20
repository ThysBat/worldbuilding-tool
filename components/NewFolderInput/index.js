import styled from "styled-components";
import Card from "../Card";

export default function Input({ width, onCancel }) {
  return (
    <Card width={width}>
      <StyledButton type="button" onClick={onCancel}>
        <span role="img">❌</span>
      </StyledButton>
      <StyledInput></StyledInput>
      <StyledButton type="button">
        <span role="img">✔️</span>
      </StyledButton>
    </Card>
  );
}

function handleCancel(event) {
  console.log(event.target);
}

const StyledInput = styled.input`
  width: 70%;
  padding: 1rem;
  opacity: 30%;

  border: none;
  border-radius: 0.6rem;

  &:focus {
    outline: none;
    opacity: 40%;
  }
`;

const StyledButton = styled.button`
  background-color: unset;
  border: none;
  margin: auto;
`;
