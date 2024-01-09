import { ThemeProvider} from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"
import { Transections } from "./pages/Transactions"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Transections/>
    </ThemeProvider>
  )
}

