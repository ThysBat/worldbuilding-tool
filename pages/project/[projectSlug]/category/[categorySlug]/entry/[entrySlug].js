import { useRouter } from "next/router";
import useStore from "../../../../../../hook/useStore";
import { useEntryStore } from "../../../../../../stores/useEntryStore";
import { useArticleStore } from "../../../../../../stores/useArticleStore";
import { useState } from "react";

import styled from "styled-components";
import Heading from "../../../../../../components/Heading";
import Button from "../../../../../../components/Button";
import Card from "../../../../../../components/Card";
import ArticleCard from "../../../../../../components/ArticleCard";
import { StyledList } from "../../../../../../components/List";
import DeleteButton from "../../../../../../components/DeleteButton";

export default function EntryPage() {
  const router = useRouter();
  const { entrySlug: slug, id } = router.query;
  const [entryName, setEntryName] = useState("");
  const [editEntryNameState, setEditEntryNameState] = useState(false);

  const articleStore = useStore(useArticleStore, (state) => state);
  const entryStore = useStore(useEntryStore, (state) => state);

  if (!entryStore || !articleStore || !slug) return <div>Loading...</div>;

  const { createNewArticle, addArticle, getArticlesByEntryId, updateArticle } =
    articleStore;
  const { getEntryById, updateEntry, deleteEntry } = entryStore;
  const entry = getEntryById(id);

  const articles = getArticlesByEntryId(entry.id);

  function handleAddArticle() {
    const newArticle = createNewArticle(entry.id);
    addArticle(newArticle);
  }

  function handleUpdateEntryName() {
    updateEntry(id, entryName);
    toggleEditEntryName();
  }

  function toggleEditEntryName() {
    setEntryName(entry.name);
    setEditEntryNameState(!editEntryNameState);
  }

  function handleBackButton() {
    if (editEntryNameState) {
      setEditEntryNameState(!editEntryNameState);
    } else {
      router.back();
    }
  }

  function handleDeleteEntry() {
    // deleteEntry(id);
    // router.push(`${router.query.projectSlug}/${router.query.categorySlug}`);
  }

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <StyledButton type="button" onClick={handleBackButton}>
            {"<"}
          </StyledButton>
        </ButtonContainer>
        {!editEntryNameState ? (
          <>
            <Heading>{entry.name}</Heading>
            <EditButton onClick={toggleEditEntryName}>
              <span role="img">🖊️</span>
            </EditButton>
          </>
        ) : (
          <>
            <StyledEntryNameInput
              type="text"
              value={entryName}
              onChange={(event) => setEntryName(event.target.value)}
            />
            <StyledInputButton type="button" onClick={handleUpdateEntryName}>
              <span role="img">✔️</span>
            </StyledInputButton>
          </>
        )}
      </Header>
      <hr />
      <AddArticleButton type="button" onClick={handleAddArticle}>
        <StyledCard>Add Article</StyledCard>
      </AddArticleButton>
      <StyledList listStyles="column">
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <ArticleCard article={article} handleUpdate={updateArticle} />
            </li>
          );
        })}
      </StyledList>
      <DeleteButton
        type={entry.name}
        onClick={handleDeleteEntry}
      ></DeleteButton>
    </>
  );
}

const Header = styled.header`
  display: flex;
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  font-size: 2rem;
`;

const EditButton = styled(Button)`
  flex: 1;
`;

const paddingGroup = "var(--padding-s)";

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
`;

const InputWrapper = styled(Card)`
  width: 100%;
  height: ${({ styles }) =>
    styles === "column" ? "var(--card-size-s)" : "var(--card-size-m)"};
  border-radius: ${({ styles }) =>
    styles === "column" ? "var(--border-radius-s)" : "var(--border-radius-m)"};

  background-color: unset;
`;

const StyledInputButton = styled(Button)`
  width: 10%;
  margin: 1rem;
  font-size: 1.2rem;
  flex: 1;
`;

const StyledEntryNameInput = styled.input`
  margin: 0;
  padding: 0;

  width: 70%;
  opacity: 30%;

  font-size: 2em;
  font-weight: bold;
  text-align: center;

  border: none;
  border-radius: var(--border-radius-s);

  font-size: 2em;
  margin: 1rem 0;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;

  &:focus {
    outline: none;
    opacity: 40%;
  }
`;
