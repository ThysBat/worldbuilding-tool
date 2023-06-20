import { useRouter } from "next/router";
import Heading from "../../components/Heading";
import { StyledButton } from "../../components/Button";
import styled from "styled-components";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  // later on the project name will be saved seperately
  const projectName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <>
      <Header>
        <ButtonContainer>
          {/* use a svg for the back button when it comes to styling */}
          <Button onClick={() => router.back()}>{"<"}</Button>
        </ButtonContainer>
        <Heading>{projectName}</Heading>
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
