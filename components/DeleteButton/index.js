import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import styled, { css } from "styled-components";

export default function DeleteButton({
  children,
  handleDelete,
  itemType,
  itemName,
  variant = "default",
}) {
  function submit() {
    // confirmAlert is a function from the package react-confirm-alert, that renders a confirmation dialoge with given and preset options.
    confirmAlert({
      title: "Confirm to delete",
      message: `Are you sure you want to delete the ${itemType} '${itemName}'?`,
      buttons: [
        {
          label: "Yes",
          onClick: handleDelete,
        },
        {
          label: "No",
          // window.close() closes only the dialogue
          onClick: () => window.close(),
        },
      ],
    });
  }

  return (
    <Button type="button" onClick={submit} variant={variant}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  border: none;
  border-radius: 4px;

  ${({ variant }) =>
    variant === "default" &&
    css`
      background-color: var(--color-danger);
      padding: 0.25rem;
      margin-top: 0.8rem;
      margin-left: var(--margin-s);
    `}

  ${({ variant }) =>
    variant === "transparent" &&
    css`
      background-color: transparent;
      opacity: 40%;
    `}
`;
