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
            <Link
              href={{
                pathname: path + item.pathPrefix + item.slug,
                query: { id: item.id },
              }}
            >
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
    listStyles === "column" ? "3rem" : "var(--card-size-m)"};
  width: ${({ listStyles }) =>
    listStyles === "column" ? "100%" : "var(--card-size-m)"};

  justify-content: ${({ listStyles }) =>
    listStyles === "column" ? "flex-start" : "center"};

  border-radius: ${({ listStyles }) =>
    listStyles === "column"
      ? "var(--border-radius-s)"
      : "var(--border-radius-m)"};

  padding: ${({ listStyles }) => (listStyles === "column" ? "0 1rem" : "0")};
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 1rem;

  flex-direction: ${({ listStyles }) =>
    listStyles === "column" ? "column" : "row"};
  flex-wrap: wrap;

  padding: 0.5rem;

  text-align: center;
  list-style: none;
`;
