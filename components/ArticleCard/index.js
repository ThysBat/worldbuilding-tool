import { useState } from "react";

import styled from "styled-components";
import Card from "../Card";
import DeleteButton from "../DeleteButton";

export default function ArticleCard({
  article,
  handleUpdate,
  handleDeleteArticle,
}) {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleContentChange(event) {
    setContent(event.target.value);
  }
  function handleTitleBlur() {
    handleUpdate(article.id, "title", title);
  }
  function handleContentBlur() {
    handleUpdate(article.id, "content", content);
  }

  return (
    <Article as="article">
      <StyledInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
      />
      <StyledInput
        as="textarea"
        rows={4}
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
        onBlur={handleContentBlur}
      />
      <DeleteButton
        variant="transparent"
        handleDelete={() => handleDeleteArticle(article.id)}
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
  align-items: flex-end;

  gap: var(--gap-xs);
  padding: var(--padding-s) var(--padding-s) var(--padding-xs);

  width: 100%;
  height: unset;

  border-radius: var(--border-radius-s);

  background-color: var(--primary-40);
`;

const StyledInput = styled.input`
  width: inherit;
  padding: 1rem;
  background-color: var(--primary-40);

  border: none;
  border-radius: var(--border-radius-s);

  resize: none;

  background-color: var(--primary-40);

  &:focus {
    outline: none;
    background-color: var(--primary-20);
  }
`;
