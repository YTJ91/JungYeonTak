import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { tmdbAxios } from "../../API/tmdbAxios";
import SearchResultItem from "./SearchResultItem";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const timer = useRef(null);

  const handleQuery = (e) => {
    // query 값이 바뀔 때 마다 실행
    if (timer.current) {
      //예약된 스케쥴이 있으면 취소
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setQuery(e.target.value);
    }, 200);
  };

  const fetchData = useCallback(async () => {
    if (!query) {
      setSearchResult(null);
      return; // query가 빈문자일 때는 요청하지 않고 데이터 비우기
    }

    let { data } = await tmdbAxios.get("search/multi", {
      // Query string
      params: {
        query: query,
        language: "ko-KR",
      },
    });

    setSearchResult(data.results);
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const navigate = useNavigate();
  const handleLink = (url) => {
    navigate(url);
  };

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <Container>
      {/* onBlur :  input에서 커서가 사라졌을 때 */}
      <Input
        type="text"
        onChange={handleQuery}
        onBlur={() => {
          setTimeout(() => {
            setSearchResult(null);
          }, 200);
        }}
      />
      <ResultList>
        {searchResult?.map((data) => (
          <SearchResultItem data={data} />
        ))}
      </ResultList>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  outline: none;
`;

const ResultList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
`;

export default Search;
