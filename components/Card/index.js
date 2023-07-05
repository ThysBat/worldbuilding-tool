import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--card-size-m);
  height: var(--card-size-m);

  background-color: var(--primary-400);
  color: var(--text-color);

  border-radius: 1.6rem;
  padding: 2px;
`;

export default Card;
