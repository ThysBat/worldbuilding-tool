export default function DeleteButton({ type, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Delete {type}
    </button>
  );
}
