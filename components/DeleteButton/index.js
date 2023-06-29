export default function DeleteButton({ onClick, whatToDelete = "" }) {
  return (
    <button type="button" onClick={onClick}>
      Delete {whatToDelete}
    </button>
  );
}
