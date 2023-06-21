import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../components/Heading";
import { StyledButton } from "../../components/Button";

export default function ProjectPage({ projectsMockData }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const project = projectsMockData.find((project) => project.slug === slug);

  if (!project) return <div>No Data Found</div>;

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <Button onClick={() => router.back()}>{"<"}</Button>
        </ButtonContainer>
        <Heading>{project.name}</Heading>
        <Placeholder></Placeholder>
      </Header>
      <hr />
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

const Button = styled(StyledButton)`
  font-size: 2rem;
`;

const Placeholder = styled.div`
  flex: 1;
`;
