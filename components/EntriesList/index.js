import useStore from "../../hook/useStore";
import { useEntryStore } from "../../stores/useEntryStore";
import { useCategoryStore } from "../../stores/useCategoryStore";
import { useRouter } from "next/router";

import AddButtonList from "../AddButtonList";

export default function EntriesList() {
  const router = useRouter();
  const entryStore = useStore(useEntryStore, (state) => state);
  const categoryStore = useStore(useCategoryStore, (state) => state);

  if (!router || !entryStore || !categoryStore) return <div>Loading...</div>;

  const { createNewEntry, addEntry, getEntriesByCategoryId } = entryStore;
  const { categories } = categoryStore;
  const { categorySlug: slug } = router.query;

  const category = categories.find((category) => category.slug === slug);
  const filteredEntries = getEntriesByCategoryId(category.id);

  const sortedEntries = filteredEntries.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function handleSave(entryName) {
    if (entryName.length < 1) return;
    const newEntry = createNewEntry(entryName, category.id);
    addEntry(newEntry);
  }

  return (
    <AddButtonList
      listItems={sortedEntries}
      handleSave={handleSave}
      listStyles={{}}
      listItemStyles={{}}
    ></AddButtonList>
  );
}
