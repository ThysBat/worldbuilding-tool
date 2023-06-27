import { useRouter } from "next/router";
import useStore from "../../../../../../hook/useStore";
import { useEntryStore } from "../../../../../../stores/useEntryStore";

import styled from "styled-components";
import Heading from "../../../../../../components/Heading";
import Button from "../../../../../../components/Button";
import Card from "../../../../../../components/Card";
import EntrySection from "../../../../../../components/EntrySection";

export default function EntryPage() {
  const router = useRouter();
  const { entrySlug: slug } = router.query;

  const entries = useStore(useEntryStore, (state) => state.entries);

  if (!entries || !slug) return <div>Loading...</div>;

  const entry = entries.find((entry) => entry.slug === slug);

  if (!entry) return <div>No Data Found</div>;

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <StyledButton onClick={() => router.back()}>{"<"}</StyledButton>
        </ButtonContainer>
        <Heading>{entry.name}</Heading>
        <Placeholder />
      </Header>
      <hr />
      <AddSectionButton type="button" onClick={{}}>
        <StyledCard>Add Section</StyledCard>
      </AddSectionButton>
      <EntrySection />
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

const AddSectionButton = styled(Button)`
  width: 100%;
  height: var(--card-size-s);
  border-radius: var(--border-radius-s);
  padding: 1rem;
`;

const StyledCard = styled(Card)`
  width: inherit;
  height: inherit;
  border-radius: inherit;
`;
