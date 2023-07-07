import styled from "styled-components";
import Button from "../Button";

import { ArrowLeftIcon, EditIcon, CheckIcon } from "../../assets/icons";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function HeaderEditable({ children, onSave }) {
  const ref = useRef(null);
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [title, setTitle] = useState(children);

  useEffect(() => {
    if (onEdit) ref.current.select();
  }, [onEdit]);

  function handleOnBack() {
    if (onEdit) {
      setOnEdit(!onEdit);
      setTitle(children);
    } else {
      router.back();
    }
  }

  function handleOnSave() {
    setOnEdit(false);
    onSave(title);
  }

  return (
    <Header>
      <StyledInputButton type="button" onClick={handleOnBack}>
        <ArrowLeftIcon fill="var(--on-surface)" />
      </StyledInputButton>
      <Title
        ref={ref}
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        disabled={!onEdit}
      />
      {onEdit ? (
        <StyledInputButton type="button" onClick={handleOnSave}>
          <CheckIcon fill="var(--on-surface)" />
        </StyledInputButton>
      ) : (
        <StyledInputButton type="button" onClick={() => setOnEdit(true)}>
          <EditIcon fill="var(--on-surface)" height="32" />
        </StyledInputButton>
      )}
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  background-color: var(--surface-container-low);
`;

const StyledInputButton = styled(Button)`
  flex: 1;
`;

const Title = styled.input`
  margin: 1rem 0;
  padding: 0;

  width: 70%;
  opacity: 30%;

  font-size: 2em;
  font-weight: bold;
  text-align: center;

  background-color: inherit;
  color: var(--on-surface);
  opacity: 100%;

  border: none;
  border-radius: var(--border-radius-s);

  &:focus {
    outline: none;
    opacity: 40%;
  }
`;
