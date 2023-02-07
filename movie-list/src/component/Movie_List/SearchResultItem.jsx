import { Link } from "react-router-dom";
import styled from "styled-components";

function SearchResultItem({ data }) {
  const { id, media_type, title, name } = data;
  return (
    <Container>
      <CustomLink to={`${media_type}/${id}`}>
        ({media_type}){title || name}
      </CustomLink>
    </Container>
  );
}

const Container = styled.li`
  background-color: #fff;

  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #eee;
  }
`;

const CustomLink = styled(Link)`
  display: block;
  padding: 5px;
`;

export default SearchResultItem;
