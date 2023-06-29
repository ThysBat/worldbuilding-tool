import Card from "../Card";
import styled from "styled-components";
import { useState } from "react";

export default function ArticleCard({ article, handleUpdate }) {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  return (
    <Article as="article">
      <StyledInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onBlur={() => handleUpdate(article.id, "title", title)}
      />
      <StyledInput
        as="textarea"
        rows={4}
        placeholder="Content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        onBlur={() => handleUpdate(article.id, "content", content)}
      />
    </Article>
  );
}

const Article = styled(Card)`
  flex-direction: column;
  gap: var(--gap-xs);
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

  resize: none;

  &:focus {
    outline: none;
    opacity: 40%;
  }
`;
