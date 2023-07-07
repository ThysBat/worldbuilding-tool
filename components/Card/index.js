import styled, { css } from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--card-size-m);
  height: var(--card-size-m);

  background-color: var(--primary-container);
  color: var(--on-primary-container);

  border-radius: 1.6rem;
  padding: 2px;
`;

export default Card;
