import { useState } from "react";
import styled from "styled-components";

import List from "../List";

import Card from "../Card";
import NewProjectInput from "../NewProjectInput";
import Button from "../Button";

export default function AddButtonList({ listItems, handleSave }) {
  const [inputState, setInputState] = useState(false);
  const [inputWidth, setInputWidth] = useState("6.5rem");

  function toggleNewProjectInput() {
    setInputState(!inputState);
    setInputWidth(!inputState ? "100%" : "6.5rem");
  }

  return (
    <List listItems={listItems}>
      <li
        style={{
          width: inputWidth,
          transition: "width 0.6s ease-out",
          marginRight: inputWidth === "100%" ? "1rem" : 0,
        }}
      >
        {inputState ? (
          <NewProjectInput
            width={inputWidth}
            onCancel={toggleNewProjectInput}
            onSave={handleSave}
          />
        ) : (
          <Button type="button" onClick={toggleNewProjectInput}>
            <Card>{"➕"}</Card>
          </Button>
        )}
      </li>
    </List>
  );
}

const StyledList = styled.li``;
