import Card from "../Card";
import styled from "styled-components";

export default function EntrySection() {
  return (
    <Section as="section">
      <input type="text" />
      <textarea />
    </Section>
  );
}

const Section = styled(Card)`
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: var(--border-radius-s);
`;
