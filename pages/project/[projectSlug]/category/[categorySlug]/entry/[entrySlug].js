import { useRouter } from "next/router";
import useStore from "../../../../../../hook/useStore";
import { useEntryStore } from "../../../../../../stores/useEntryStore";
import { useArticleStore } from "../../../../../../stores/useArticleStore";

import styled from "styled-components";
import HeaderEditable from "../../../../../../components/HeaderEditable";
import Button from "../../../../../../components/Button";
import Card from "../../../../../../components/Card";
import ArticleCard from "../../../../../../components/ArticleCard";
import { StyledList } from "../../../../../../components/List";
import DeleteButton, {
  ButtonOnBottomContainer,
} from "../../../../../../components/DeleteButton";

export default function EntryPage() {
  const router = useRouter();
  const { entrySlug: slug, id } = router.query;

  const articleStore = useStore(useArticleStore, (state) => state);
  const entryStore = useStore(useEntryStore, (state) => state);

  if (!entryStore || !articleStore || !slug) return <div>Loading...</div>;

  const {
    createNewArticle,
    addArticle,
    getArticlesByEntryId,
    updateArticle,
    deleteArticle,
  } = articleStore;
  const { getEntryById, updateEntry, deleteEntry } = entryStore;
  const entry = getEntryById(id);

  if (!entry) return <div>Loading...</div>;

  const articles = getArticlesByEntryId(entry.id);

  function handleAddArticle() {
    const newArticle = createNewArticle(entry.id);
    addArticle(newArticle);
  }

  function handleSaveEntryName(newName) {
    updateEntry(entry.id, newName);
  }

  function handleDeleteEntry() {
    deleteEntry(id);
    router.back();
  }

  return (
    <>
      <HeaderEditable onSave={handleSaveEntryName}>{entry.name}</HeaderEditable>
      <hr />
      <AddArticleButton type="button" onClick={handleAddArticle}>
        <StyledCard>Add Article</StyledCard>
      </AddArticleButton>
      <StyledList listStyles="column">
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <ArticleCard
                article={article}
                handleUpdate={updateArticle}
                handleDeleteArticle={deleteArticle}
              />
            </li>
          );
        })}
      </StyledList>
      <ButtonOnBottomContainer>
        <DeleteButton
          handleDelete={handleDeleteEntry}
          itemType={entry.type}
          itemName={entry.name}
        >
          {`Delete '${entry.name}'`}
        </DeleteButton>
      </ButtonOnBottomContainer>
    </>
  );
}

const paddingGroup = "var(--margin-m)";

const AddArticleButton = styled(Button)`
  width: calc(100vw - calc(2 * ${paddingGroup}));
  height: var(--card-size-s);
  border-radius: var(--border-radius-s);

  margin: ${paddingGroup};
`;

const StyledCard = styled(Card)`
  width: inherit;
  height: inherit;
  border-radius: inherit;

  background-color: var(--surface-container-highest);
  color: var(--on-surface);
  font-size: 1rem;
`;
