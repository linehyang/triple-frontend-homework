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
      setCount(() => {
        return progress * maxiumValue
      })
    }

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return Math.round(count)
}

export default useCountUp
