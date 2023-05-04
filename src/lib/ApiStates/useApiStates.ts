import { useState } from "react"
import { APIStateProps } from "./typed"

const useApiStates = (): APIStateProps => {
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  return {
    loading, setLoading,
    isError, setIsError,
  }
}

export { useApiStates }