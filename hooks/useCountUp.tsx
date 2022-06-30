import { useState, useEffect, useRef } from 'react'

import { easeOutCirc } from '../utils/easeOutCirc'

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0)
  let start: number

  const requestRef = useRef<number>(0)

  const animate = (time: DOMHighResTimeStamp) => {
    if (start === undefined) {
      start = time
    }

    const elapsed = time - start
    const progress = easeOutCirc(elapsed / duration)
    if (elapsed <= duration) {
      setCount(() => {
        return progress * end
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
