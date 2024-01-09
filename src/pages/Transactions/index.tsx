import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransectionsContainer, TransectionsTable } from "./styles";


export function Transections(){
    return(
        <div>
            <Header/>
            <Summary/>

            <TransectionsContainer>
                <TransectionsTable>
                    <tbody>
                        <tr>
                            <td width={"50%"}>Desenvolvimento de sites</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$12.00,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width={"50%"}>aiiaiaiai</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                 -R$59,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width={"50%"}>Alimentação</td>
                            <td>
                                <PriceHighlight variant="income">
                                 R$12.00,00
                                </PriceHighlight>
                                </td>
                            <td>Venda</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransectionsTable>
            </TransectionsContainer>
        </div>
        ) 
}