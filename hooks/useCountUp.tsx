import { useState, useEffect, useRef } from 'react'

//reference : https://easings.net/#easeOutCirc
const easeOutCirc = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}

const DEFAULT_DURATION = 2000

const useCountUp = (maxiumValue: number, duration = DEFAULT_DURATION) => {
  const [count, setCount] = useState(0)
  const requestRef = useRef(0)

  let startTime: number

  const animate = (time: DOMHighResTimeStamp) => {
    if (startTime === undefined) {
      startTime = time
    }

    const elapsedTime = time - startTime
    const progress = easeOutCirc(elapsedTime / duration)

    if (elapsedTime <= duration) {
      setCount(progress * maxiumValue)
    } else {
      setCount(maxiumValue)
      return
    }

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return Math.floor(count)
}

export default useCountUp

// import { useState, useEffect, useRef } from "react";

// //reference : https://easings.net/#easeOutCirc
// const easeOutCirc = (x: number) => {
//   return Math.sqrt(1 - Math.pow(x - 1, 2));
// };

// const DEFAULT_DURATION = 10000;

// const useCountUp = (
//   maxiumValue: number,
//   from: number = 50,
//   duration = DEFAULT_DURATION
// ) => {
//   const [count, setCount] = useState(from);
//   const requestRef = useRef(0);

//   let startTime: number;

//   const animate = (time: DOMHighResTimeStamp) => {
//     if (startTime === undefined) {
//       startTime = time;
//     }

//     const elapsedTime = time - startTime;
//     /* 0 <= progress <= 1 */
//     const progress = easeOutCirc(Math.min(elapsedTime / duration, 1));

//     setCount(() => {
//       //progress 가 0일때
//       //couunt가 50부터 시작을 해야하기 때문에 count라는 상태가 50보다 작으면 안됨
//       // y = (A- 50)x + 50
//       return progress * (maxiumValue - 50) + 50;
//     });

//     requestRef.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, [maxiumValue]);

//   return Math.floor(count);
// };

// export default useCountUp;
