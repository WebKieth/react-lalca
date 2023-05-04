import { ComponentType } from "react"
import { useApiStates } from "./useApiStates"


const withApiStates = (Provider: ComponentType) => (restProps: any) => {
  const states = useApiStates()
  const props: any = {
    ...states,
    ...restProps,
  }
  
  return <Provider {...props}/>
}

export { withApiStates }