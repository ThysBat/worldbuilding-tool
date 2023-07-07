import { useRouter } from "next/router";
import useStore from "../../../../../../../../hook/useStore";
import { useSubentryStore } from "../../../../../../../../stores/useSubentryStore";
import { useSubarticleStore } from "../../../../../../../../stores/useSubarticleStore";

import styled from "styled-components";
import HeaderEditable from "../../../../../../../../components/HeaderEditable";
import Button from "../../../../../../../../components/Button";
import Card from "../../../../../../../../components/Card";
import ArticleCard from "../../../../../../../../components/ArticleCard";
import { StyledList } from "../../../../../../../../components/List";
import DeleteButton, {
  ButtonOnBottomContainer,
} from "../../../../../../../../components/DeleteButton";

export default function SubentryPage() {
  const router = useRouter();
  const { subentrySlug: slug, id } = router.query;

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

  function handleSaveSubentryName(newName) {
    updateSubentry(subentry.id, newName);
  }

  function handleDeleteSubentry() {
    deleteSubentry(id);
    router.back();
  }

  return (
    <>
      <HeaderEditable onSave={handleSaveSubentryName}>
        {subentry.name}
      </HeaderEditable>
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
      <ButtonOnBottomContainer>
        <DeleteButton
          handleDelete={handleDeleteSubentry}
          itemType={subentry.type}
          itemName={subentry.name}
        >
          {`Delete '${subentry.name}'`}
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
