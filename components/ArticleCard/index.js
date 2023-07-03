import { useState } from "react";

import styled from "styled-components";
import Card from "../Card";
import DeleteButton from "../DeleteButton";

export default function ArticleCard({ article, handleUpdate, handleDelete }) {
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
      <DeleteButton
        variant="transparent"
        handleDelete={() => handleDelete(article.id)}
        itemType={"article"}
        itemName={article.title}
      >
        Delete
      </DeleteButton>
    </Article>
  );
}

const Article = styled(Card)`
  flex-direction: column;
  gap: var(--gap-xs);
  padding: var(--padding-s) var(--padding-s) var(--padding-xs);
  width: 100%;
  height: unset;
  border-radius: var(--border-radius-s);
  align-items: flex-end;
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
