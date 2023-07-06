import styled from "styled-components";
import Button from "../Button";

import BackIcon from "../../assets/icons/chevron_left.svg";
import EditIcon from "../../assets/icons/edit.svg";
import CheckIcon from "../../assets/icons/check.svg";

import Image from "next/image";
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
      {/* <ButtonContainer>
        <StyledButton type="button" onClick={handleOnBack}>
          <Image src={BackIcon} alt="back icon" />
        </StyledButton>
      </ButtonContainer> */}
      <StyledInputButton type="button" onClick={handleOnBack}>
        <Image src={BackIcon} alt="back icon" />
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
          <Image src={CheckIcon} alt="check icon" height="42" />
        </StyledInputButton>
      ) : (
        <StyledInputButton type="button" onClick={() => setOnEdit(true)}>
          <Image src={EditIcon} alt="edit icon" height="42" />
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
  /* flex: 1;
  width: 10%;
  margin: 1rem; */
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
