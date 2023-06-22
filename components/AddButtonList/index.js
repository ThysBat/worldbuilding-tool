import { useState } from "react";
import styled from "styled-components";

import List from "../List";

import Card from "../Card";
import NewProjectInput from "../NewProjectInput";
import Input from "../InputField";
import Button from "../Button";

export default function AddButtonList({ listItems }) {
  const [inputState, setInputState] = useState(false);
  const [inputWidth, setInputWidth] = useState("6.5rem");

  function toggleNewProjectInput() {
    setInputState(!inputState);
    setInputWidth(!inputState ? "100%" : "6.5rem");
  }

  return (
    <List listItems={listItems}>
      <FirstListItem inputWidth={inputWidth}>
        {inputState ? (
          <NewProjectInput
            width={inputWidth}
            onCancel={toggleNewProjectInput}
          />
        ) : (
          <Button type="button" onClick={toggleNewProjectInput}>
            <Card>{"➕"}</Card>
          </Button>
        )}
      </FirstListItem>
      <Input></Input>
    </List>
  );
}

const FirstListItem = styled.li`
  width: ${({ inputWidth }) => inputWidth};
  transition: width 0.6s ease-out;
  margin-right: ${({ inputWidth }) => (inputWidth === "100%" ? "1rem" : 0)};
`;
