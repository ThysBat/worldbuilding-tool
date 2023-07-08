import useStore from "../../hook/useStore";
import { useEntryStore } from "../../stores/useEntryStore";

import List from "../List";
import AddInputButton from "../AddInputButton";

export default function EntriesList({ category }) {
  const entryStore = useStore(useEntryStore, (state) => state);

  if (!entryStore) return <div>Loading...</div>;

  const { createNewEntry, addEntry, getEntriesByReferenceId } = entryStore;

  const entries = getEntriesByReferenceId(category.id, category.type);

  const sortedEntries = entries.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function handleSave(entryName) {
    if (entryName.length < 1) return;
    const newEntry = createNewEntry(entryName, category.id);
    addEntry(newEntry);
  }

  return (
    <List listItems={sortedEntries} listStyles={"column"}>
      <AddInputButton
        as="li"
        handleSave={handleSave}
        styles={"column"}
      ></AddInputButton>
    </List>
  );
}
