import { useState, useEffect } from 'react'

const useFadeInUp = (initailValue: boolean) => {
  const [isRender, setIsRender] = useState(initailValue)

  useEffect(() => {
    if (!initailValue) setIsRender(() => !isRender)
    else {
      setIsRender(() => !isRender)
    }
  }, [])

  return isRender
}

export default useFadeInUp
