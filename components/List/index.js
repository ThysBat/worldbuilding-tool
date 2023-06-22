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
      {listItems.map((project) => {
        return (
          <li key={project.id}>
            <LinkedCard href={path + project.pathPrefix + project.slug}>
              {project.name}
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
