import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {MediaCard, PageLayout } from "../components";
import useFetchData from "../hooks/useFetchData";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Spinner from "../utils/Spinner";

export default function Home() {
  const { error, data, setPage, newData } = useFetchData("trending/movie/week");
  console.log('data', data);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

  function fetchMore () {
    setTimeout(()=> {
       setPage((prev)=> prev + 1)
       setIsFetching(false)
    }, 5000)
  }

  useEffect(() => {
    Document.title = "Home";
  }, []);
  return (
    <PageLayout heading="Trending Movies" error={error}>
      <Row className="gy-2">
        {[...newData, ...data].map((movie) => (
          <Col xs={6} md={3} xl={2} key={movie.id}>
            <MediaCard {...movie} />
          </Col>
        ))}
      </Row>
      {isFetching && <Spinner/>}
    </PageLayout>
  );
}
