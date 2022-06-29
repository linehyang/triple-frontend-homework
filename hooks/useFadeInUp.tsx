import { useState, useEffect } from 'react'

const useFadeInUp = (initailValue: boolean) => {
  const [isLoading, setIsLoading] = useState(initailValue)

  useEffect(() => {
    if (!initailValue) setIsLoading(() => !isLoading)
    else {
      setIsLoading(() => !isLoading)
    }
  }, [])

  return isLoading
}

export default useFadeInUp
