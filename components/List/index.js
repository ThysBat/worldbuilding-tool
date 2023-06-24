import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Card from "../Card";

export default function List({ children, listItems = [], listStyles = "row" }) {
  const router = useRouter();
  const path = router.asPath;

  if (!path) return <div>Loading...</div>;

  return (
    <StyledList listStyles={listStyles}>
      {children}
      {listItems.map((item) => {
        return (
          <li key={item.id}>
            <Link href={path + item.pathPrefix + item.slug}>
              <StyledCard listStyles={listStyles}>{item.name}</StyledCard>
            </Link>
          </li>
        );
      })}
    </StyledList>
  );
}

const StyledCard = styled(Card)`
  height: ${({ listStyles }) =>
    listStyles === "column" ? "3rem" : "var(--card-size)"};
  width: ${({ listStyles }) =>
    listStyles === "column" ? "100%" : "var(--card-size)"};

  /* justify-content: flex-start; */
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 1rem;

  flex-direction: ${({ listStyles }) =>
    listStyles === "column" ? "column" : "row"};
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: ${({ listStyles }) =>
    listStyles === "column" ? "1rem" : "unset"};

  text-align: center;
  list-style: none;
`;
