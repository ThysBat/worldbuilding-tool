import { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";
import DeleteButton from "../DeleteButton";

import { ArrowUpIcon } from "../../assets/icons";
import { ArrowDownIcon } from "../../assets/icons";

export default function ArticleCard({
  article,
  handleUpdate,
  handleDeleteArticle,
}) {
  const contentRef = useRef(null);
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (contentRef && expand) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      contentRef.current.style.height = "0px";
      const scrollHeight = contentRef.current.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      contentRef.current.style.height = scrollHeight + "px";
    } else {
      contentRef.current.style.height = "unset";
      contentRef.current.rows = 3;
    }
  }, [contentRef, content, expand]);

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

  function toggleArticle() {
    setExpand(!expand);
  }

  return (
    <Article as="article">
      <TitleWrapper>
        <StyledInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
        />
        <ToggleButton onClick={toggleArticle}>
          {expand ? (
            <ArrowUpIcon height={36} fill="var(--primary)" />
          ) : (
            <ArrowDownIcon height={36} fill="var(--primary)" />
          )}
        </ToggleButton>
      </TitleWrapper>
      <StyledInput
        as="textarea"
        ref={contentRef}
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
        onBlur={handleContentBlur}
      ></StyledInput>
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

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ToggleButton = styled(Button)`
  flex: 1;
`;

const Article = styled(Card)`
  flex-direction: column;
  align-items: flex-end;

  gap: var(--gap-xs);
  padding: var(--padding-s) var(--padding-s) var(--padding-xs);

  width: 100%;
  height: unset;

  border-radius: var(--border-radius-s);

  background-color: var(--surface-container-high);
`;

const StyledInput = styled.input`
  width: inherit;
  padding: 1rem;

  border: none;
  border-radius: var(--border-radius-s);

  resize: none;

  background-color: var(--surface-container);
  color: var(--on-surface);

  &:focus {
    outline: none;
    background-color: var(--surface-container-low);
  }
`;
