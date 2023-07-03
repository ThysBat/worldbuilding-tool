import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import styled from "styled-components";

export default function DeleteButton({ handleDelete, whatToDelete = "" }) {
  // confirmAlert is a function from the package react-confirm-alert,
  // that renders a confirmation dialoge with given and preset options.
  // window.close() closes only the dialoge
  function submit() {
    confirmAlert({
      title: "Confirm to delete",
      message: `Are you sure you want to delete ${whatToDelete}?`,
      buttons: [
        {
          label: "Yes",
          onClick: handleDelete,
        },
        {
          label: "No",
          onClick: () => window.close(),
        },
      ],
    });
  }

  return (
    <Button type="button" onClick={submit}>
      Delete {whatToDelete}
    </Button>
  );
}

const Button = styled.button`
  background-color: rgba(255, 50, 40, 0.6);
  border: none;
  border-radius: 4px;
  padding: 0.25rem;
  margin: 0.25rem;
`;
