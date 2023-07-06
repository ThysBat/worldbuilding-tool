import { useRouter } from "next/router";
import useStore from "../../../../../../../../hook/useStore";
import { useSubentryStore } from "../../../../../../../../stores/useSubentryStore";
import { useSubarticleStore } from "../../../../../../../../stores/useSubarticleStore";
import { useState } from "react";

import styled from "styled-components";
import Heading from "../../../../../../../../components/Heading";
import Button from "../../../../../../../../components/Button";
import Card from "../../../../../../../../components/Card";
import ArticleCard from "../../../../../../../../components/ArticleCard";
import { StyledList } from "../../../../../../../../components/List";
import DeleteButton from "../../../../../../../../components/DeleteButton";

export default function SubentryPage() {
  const router = useRouter();
  const { subentrySlug: slug, id } = router.query;
  const [subentryName, setSubentryName] = useState("");
  const [editSubentryNameState, setEditSubentryNameState] = useState(false);

  const subarticleStore = useStore(useSubarticleStore, (state) => state);
  const subentryStore = useStore(useSubentryStore, (state) => state);

  if (!subentryStore || !subarticleStore || !slug) return <div>Loading...</div>;

  const {
    createNewSubarticle,
    addSubarticle,
    getSubarticlesBySubentryId,
    updateSubarticle,
    deleteSubarticle,
  } = subarticleStore;
  const { getSubentryById, updateSubentry, deleteSubentry } = subentryStore;
  const subentry = getSubentryById(id);

  if (!subentry) return <div>Loading...</div>;

  const subarticles = getSubarticlesBySubentryId(subentry.id);

  function handleAddSubarticle() {
    const newSubarticle = createNewSubarticle(subentry.id);
    addSubarticle(newSubarticle);
  }

  function handleUpdateSubentryName() {
    updateSubentry(id, subentryName);
    toggleEditSubentryName();
  }

  function toggleEditSubentryName() {
    setSubentryName(subentry.name);
    setEditSubentryNameState(!editSubentryNameState);
  }

  function handleBackButton() {
    if (editSubentryNameState) {
      setEditSubentryNameState(!editSubentryNameState);
    } else {
      router.back();
    }
  }

  function handleDeleteSubentry() {
    deleteSubentry(id);
    router.back();
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
        {!editSubentryNameState ? (
          <>
            <Heading>{subentry.name}</Heading>
            <EditButton onClick={toggleEditSubentryName}>
              <span aria-label="edit" role="img">
                🖊️
              </span>
            </EditButton>
          </>
        ) : (
          <>
            <StyledEntryNameInput
              type="text"
              value={subentryName}
              onChange={(event) => setSubentryName(event.target.value)}
            />
            <StyledInputButton type="button" onClick={handleUpdateSubentryName}>
              <span aria-label="save entry title" role="img">
                ✔️
              </span>
            </StyledInputButton>
          </>
        )}
      </Header>
      <hr />
      <AddArticleButton type="button" onClick={handleAddSubarticle}>
        <StyledCard>Add Article</StyledCard>
      </AddArticleButton>
      <StyledList listStyles="column">
        {subarticles.map((subarticle) => {
          return (
            <li key={subarticle.id}>
              <ArticleCard
                article={subarticle}
                handleUpdate={updateSubarticle}
                handleDeleteArticle={deleteSubarticle}
              />
            </li>
          );
        })}
      </StyledList>
      <DeleteButton
        handleDelete={handleDeleteSubentry}
        itemType={subentry.type}
        itemName={subentry.name}
      >
        {`Delete '${subentry.name}'`}
      </DeleteButton>
    </>
  );
}

const Header = styled.header`
  display: flex;
  background-color: var(--surface-container-low);
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

  background-color: var(--surface-container-highest);
  color: var(--on-surface-container);
`;

const StyledInputButton = styled(Button)`
  width: 10%;
  margin: 1rem;
  font-size: 1.2rem;
  flex: 1;
`;

const StyledEntryNameInput = styled.input`
  margin: 1rem 0;
  padding: 0;

  width: 70%;
  opacity: 30%;

  font-size: 2em;
  font-weight: bold;
  text-align: center;

  border: none;
  border-radius: var(--border-radius-s);

  &:focus {
    outline: none;
    opacity: 40%;
  }
`;
