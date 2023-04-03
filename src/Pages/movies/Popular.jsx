import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { MediaCard, PageLayout } from '../../components'
import useFetchData from '../../hooks/useFetchData'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import Spinner from '../../utils/Spinner'

export default function Popular() {
    const { error, data, newData, setPage } = useFetchData('movie/popular');
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore)

    
  function fetchMore () {
    setTimeout(()=> {
       setPage((prev)=> prev + 1)
       setIsFetching(false)
    }, 5000)
  }

    if (!data) return <Spinner />
  return (
    <PageLayout heading='Popular' error={error}>
        <Row className='gy-2'>
          {[...newData, ...data].map((movie) => (
             <Col xs={6} md={3} xl={2} key={movie.id}>
            <MediaCard {...movie}/>
            </Col>
          ))}
        </Row>
        {isFetching && <Spinner/>}
        </PageLayout>
  )
}
