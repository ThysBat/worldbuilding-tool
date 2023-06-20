import styled from "styled-components";
import Card from "../Card";
import { useState } from "react";

export default function Input({ width, onCancel, onSave }) {
  const [newProjectInput, setNewProjectInput] = useState("");
  console.log(newProjectInput);

  return (
    <Card width={width}>
      <StyledButton type="button" onClick={onCancel}>
        <span role="img">❌</span>
      </StyledButton>
      <StyledInput
        name="newProjectInput"
        value={newProjectInput}
        onChange={(event) => setNewProjectInput(event.target.value)}
      ></StyledInput>
      <StyledButton type="button" onClick={() => onSave(newProjectInput)}>
        <span role="img">✔️</span>
      </StyledButton>
    </Card>
  );
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
