const RefetchContext = React.createContext<() => void>(() => {})

export const useRefetch = () => React.useContext(RefetchContext)

export default RefetchContext
