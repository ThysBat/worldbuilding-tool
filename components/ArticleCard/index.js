import Card from "../Card";
import styled from "styled-components";

export default function ArticleCard({ title, content }) {
  return (
    <Article as="article">
      <StyledInput type="text" placeholder="Title" defaultValue={title} />
      <StyledInput
        as="textarea"
        rows={4}
        placeholder="Content"
        defaultValue={content}
      />
    </Article>
  );
}

const Article = styled(Card)`
  flex-direction: column;
  gap: var(--gap-m);
  padding: var(--padding-s);
  width: 100%;
  height: unset;
  border-radius: var(--border-radius-s);
`;

const StyledInput = styled.input`
  width: inherit;
  padding: 1rem;
  opacity: 30%;

  border: none;
  border-radius: var(--border-radius-s);

  &:focus {
    outline: none;
    opacity: 40%;
  }
`;
