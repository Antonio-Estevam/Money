import { useContext} from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SerchForm } from "./components/SerchForm";
import { PriceHighlight, TransectionsContainer, TransectionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";


export function Transections(){

    const {transactions} = useContext(TransactionContext)

    return(
        <div>
            <Header/>
            <Summary/>

            <TransectionsContainer>
            <SerchForm/>
                <TransectionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr>
                            <td width={"50%"} key={transaction.id}>{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                {transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>

                            )
                        })}
                    </tbody>
                </TransectionsTable>
            </TransectionsContainer>
        </div>
        ) 
}