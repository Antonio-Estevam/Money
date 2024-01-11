import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransectionType, TransectionTypeButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

export function NewTransactionModal(){
    return (
        <Dialog.Portal>
                <Overlay/>
                <Content>
                  <Dialog.Title>Nova transação</Dialog.Title>  

                  <CloseButton>
                    <X size={24}/>
                  </CloseButton>

                  <form>
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <TransectionType>
                        <TransectionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Entrada 
                        </TransectionTypeButton>
                        <TransectionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída 
                        </TransectionTypeButton>
                    </TransectionType>

                    <button type="submit">Cadastrar</button>
                  </form>
                </Content>
        </Dialog.Portal>
    )
}