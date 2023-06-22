import { useRouter } from "next/router";
import styled from "styled-components";
import LinkedCard from "../LinkedCard";

export default function List({ children, listItems = [] }) {
  const router = useRouter();
  const path = router.asPath;

  if (!path) return <div>Loading...</div>;

  return (
    <StyledList>
      {children}
      {listItems.map((item) => {
        return (
          <li key={item.id}>
            <LinkedCard href={path + item.pathPrefix + item.slug}>
              {item.name}
            </LinkedCard>
          </li>
        );
      })}
    </StyledList>
  );
}

export const StyledList = styled.ul`
  display: flex;
  gap: 1rem;

  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1rem;

  text-align: center;
  list-style: none;
`;
