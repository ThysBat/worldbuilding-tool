import { useRouter } from "next/router";
import useStore from "../../../../../../hook/useStore";
import { useEntryStore } from "../../../../../../stores/useEntryStore";
import { useArticleStore } from "../../../../../../stores/useArticleStore";

import styled from "styled-components";
import Heading from "../../../../../../components/Heading";
import Button from "../../../../../../components/Button";
import Card from "../../../../../../components/Card";
import ArticleCard from "../../../../../../components/ArticleCard";
import { StyledList } from "../../../../../../components/List";

export default function EntryPage() {
  const router = useRouter();
  const { entrySlug: slug } = router.query;

  const entries = useStore(useEntryStore, (state) => state.entries);
  const articles = useStore(useArticleStore, (state) => state.articles);

  if (!entries || !articles || !slug) return <div>Loading...</div>;

  const entry = entries.find((entry) => entry.slug === slug);

  if (!entry) return <div>No Data Found</div>;

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <StyledButton type="button" onClick={() => router.back()}>
            {"<"}
          </StyledButton>
        </ButtonContainer>
        <Heading>{entry.name}</Heading>
        <Placeholder />
      </Header>
      <hr />
      <AddSectionButton type="button" onClick={() => console.log(entry)}>
        <StyledCard>Add Section</StyledCard>
      </AddSectionButton>
      <StyledList listStyles="column">
        {articles.map(({ id, title, content }) => {
          return (
            <li key={id}>
              <ArticleCard title={title} content={content} />
            </li>
          );
        })}
      </StyledList>
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

const Placeholder = styled.div`
  flex: 1;
`;

const paddingGroup = "var(--padding-s)";

const AddSectionButton = styled(Button)`
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
