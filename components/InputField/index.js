import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";

import Card from "../Card";
import Button from "../Button";

export default function InputField({ width, onCancel, onSave }) {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);

  function onClickSave() {
    onSave(inputValue);
    setInputValue("");
    ref.current.focus();
  }

  return (
    <Card width={width}>
      <Button type="button" onClick={onCancel}>
        <span role="img">❌</span>
      </Button>
      <StyledInput
        ref={ref}
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button type="button" onClick={onClickSave}>
        <span role="img">✔️</span>
      </Button>
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
