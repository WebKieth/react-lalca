import { Dispatch, SetStateAction } from "react"

export type APIStateProps = {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  isError: boolean
  setIsError: Dispatch<SetStateAction<boolean>>
}
