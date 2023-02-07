import { Link } from "react-router-dom";
import styled from "styled-components";

function ContentItem({ item }) {
  const {
    id,
    title,
    release_date,
    poster_path,
    name,
    first_air_date,
    profile_path,
  } = item;

  const img_url =
    "https://image.tmdb.org/t/p/w154/" + (poster_path || profile_path);

  // title이 있으면 move, profile 있으면 person 둘 다 없으면 tv
  const type = title ? "movie" : profile_path ? "person" : "tv";

  return (
    <Container>
      <Link to={`${type}/${id}`}>
        <ImgBox>
          <img src={img_url} alt={title} />
        </ImgBox>
        <Title>{title ?? name}</Title>
        <ReleaseData>{release_date ?? first_air_date}</ReleaseData>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  line-height: 1rem;
  & + & {
    margin-left: 15px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: 110px;
  height: 170px;
  background-color: #eee;

  img {
    height: 100%;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseData = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export default ContentItem;
