import { useState } from "react";
import styled from "styled-components";
import AddButtonList from "../AddButtonList";

export default function CategoriesList({ data, handleSave }) {
  const [inputState, setInputState] = useState(false);
  const [inputWidth, setInputWidth] = useState("6.5rem");

  const sortedCategories = data.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function toggleNewProjectInput() {
    setInputState(!inputState);
    setInputWidth(!inputState ? "100%" : "6.5rem");
  }

  return <AddButtonList listItems={sortedCategories}></AddButtonList>;
}

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;

  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1rem;

  text-align: center;
  list-style: none;
`;

const AddProjectButton = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  justify-content: center;
`;
