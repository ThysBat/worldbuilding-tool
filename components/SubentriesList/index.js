import useStore from "../../hook/useStore";
import { useSubentryStore } from "../../stores/useSubentryStore";
import { useSubcategoryStore } from "../../stores/useSubcategoryStore";
import { useRouter } from "next/router";

import List from "../List";
import AddInputButton from "../AddInputButton";

export default function SubentriesList() {
  const router = useRouter();
  const subentryStore = useStore(useSubentryStore, (state) => state);
  const subcategoryStore = useStore(useSubcategoryStore, (state) => state);

  if (!router || !subentryStore || !subcategoryStore)
    return <div>Loading...</div>;

  const { createNewSubentry, addSubentry, getSubentriesBySubcategoryId } =
    subentryStore;
  const { subcategories } = subcategoryStore;
  const { subcategorySlug: slug } = router.query;

  const subcategory = subcategories.find(
    (subcategory) => subcategory.slug === slug
  );
  const filteredSubentries = getSubentriesBySubcategoryId(subcategory.id);

  const sortedSubentries = filteredSubentries.slice().sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });

  function handleSave(subentryName) {
    if (subentryName.length < 1) return;
    const newSubentry = createNewSubentry(subentryName, subcategory.id);
    addSubentry(newSubentry);
  }

  return (
    <List listItems={sortedSubentries} listStyles={"column"}>
      <AddInputButton
        as="li"
        handleSave={handleSave}
        styles={"column"}
      ></AddInputButton>
    </List>
  );
}
