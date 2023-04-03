import { ThreeCircles } from 'react-loader-spinner'

export default function spinner() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
 <ThreeCircles
  height="50"
  // width="50"
  color="#ff8c00"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor="#006400"
  middleCircleColor="#7fff00"
/>
    </div>
  )
}
