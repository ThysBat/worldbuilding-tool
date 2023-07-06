import { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";

import { AddIcon, CancelIcon, CheckIcon } from "../../assets/icons";

import Card from "../Card";
import Button from "../Button";

export default function AddInputButton({ handleSave, styles = "row" }) {
  const [inputState, setInputState] = useState(false);
  const [inputWidth, setInputWidth] = useState(
    styles === "column" ? "100%" : "var(--card-size-m)"
  );

  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);

  function onClickSave() {
    handleSave(inputValue);
    setInputValue("");
    ref.current.focus();
  }

  function toggleNewProjectInput() {
    setInputState(!inputState);
    if (styles === "row")
      setInputWidth(!inputState ? "100%" : "var(--card-size-m)");
  }

  const iconSize = "38";

  return (
    <InputButtonContainer width={inputWidth} styles={styles}>
      {inputState ? (
        <InputWrapper styles={styles}>
          <StyledButton type="button" onClick={toggleNewProjectInput}>
            <CancelIcon
              fill="var(--on-primary)"
              height={iconSize}
              width={iconSize}
            />
          </StyledButton>
          <StyledInput
            ref={ref}
            type="text"
            styles={styles}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <StyledButton type="button" onClick={onClickSave}>
            <CheckIcon
              fill="var(--on-primary)"
              height={iconSize}
              width={iconSize}
            />
          </StyledButton>
        </InputWrapper>
      ) : (
        <Button type="button" onClick={toggleNewProjectInput}>
          <StyledCard width={inputWidth} styles={styles}>
            <AddIcon
              fill="var(--on-primary)"
              height={iconSize}
              width={iconSize}
            />
          </StyledCard>
        </Button>
      )}
    </InputButtonContainer>
  );
}

const StyledCard = styled(Card)`
  width: ${({ width }) => width};
  height: ${({ styles }) =>
    styles === "column" ? "var(--card-size-s)" : "var(--card-size-m)"};
  border-radius: ${({ styles }) =>
    styles === "column" ? "var(--border-radius-s)" : "var(--border-radius-m)"};
  background-color: var(--primary);
`;

const InputButtonContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ styles }) =>
    styles === "column" ? "var(--card-size-s)" : "var(--card-size-m)"};
  transition: width 0.6s ease-out;
`;

const InputWrapper = styled(Card)`
  width: 100%;
  height: ${({ styles }) =>
    styles === "column" ? "var(--card-size-s)" : "var(--card-size-m)"};
  border-radius: ${({ styles }) =>
    styles === "column" ? "var(--border-radius-s)" : "var(--border-radius-m)"};
  background-color: var(--primary);
`;

const StyledButton = styled(Button)`
  margin: var(--margin-s);
  flex: 1;
`;

const StyledInput = styled.input`
  width: 100%;
  height: ${({ styles }) => (styles === "column" ? "100%" : "3rem")};

  background-color: var(--surface-container-low);
  color: var(--on-surface);

  border: none;
  border-radius: var(--border-radius-s);

  &:focus {
    outline: none;
    opacity: 88%;
  }
`;
