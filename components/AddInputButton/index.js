import { useState } from "react";
import styled from "styled-components";

import List from "../List";
import Card from "../Card";
import Input from "../InputField";
import Button from "../Button";

export default function AddInputButton({ handleSave }) {
  const [inputState, setInputState] = useState(false);
  const [inputWidth, setInputWidth] = useState("6.5rem");

  function toggleNewProjectInput() {
    setInputState(!inputState);
    setInputWidth(!inputState ? "100%" : "6.5rem");
  }

  return (
    <InputButtonContainer inputWidth={inputWidth}>
      {inputState ? (
        <Input
          width={inputWidth}
          onCancel={toggleNewProjectInput}
          onSave={handleSave}
        ></Input>
      ) : (
        <Button type="button" onClick={toggleNewProjectInput}>
          <Card>{"➕"}</Card>
        </Button>
      )}
    </InputButtonContainer>
  );
}

const InputButtonContainer = styled.div`
  width: ${({ inputWidth }) => inputWidth};
  transition: width 0.6s ease-out;
  margin-right: ${({ inputWidth }) => (inputWidth === "100%" ? "1rem" : 0)};
`;
