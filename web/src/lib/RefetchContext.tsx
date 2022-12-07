const RefetchContext = React.createContext<() => Promise<void>>(async () => {})

export const useRefetch = () => React.useContext(RefetchContext)

export default RefetchContext
