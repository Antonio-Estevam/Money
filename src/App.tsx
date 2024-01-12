import { ThemeProvider} from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"
import { Transections } from "./pages/Transactions"
import { TransactionsProvider } from "./contexts/TransactionsContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <TransactionsProvider>
      <Transections/>
      </TransactionsProvider>
    </ThemeProvider>
  )
}

