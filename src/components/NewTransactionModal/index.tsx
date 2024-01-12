import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransectionType, TransectionTypeButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category:z.string(),
  //type: z.enum(["income","outcome"]),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal(){
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
  }
} = useForm<newTransactionFormInputs>({
  resolver: zodResolver(newTransactionFormSchema),
  })

  function handleCreatNewTransactions(data: newTransactionFormInputs){
    console.log(data);
    
}
    return (
        <Dialog.Portal>
                <Overlay/>
                <Content>
                  <Dialog.Title>Nova transação</Dialog.Title>  

                  <CloseButton>
                    <X size={24}/>
                  </CloseButton>

                  <form onSubmit={handleSubmit(handleCreatNewTransactions)}>
                    <input 
                    type="text" 
                    placeholder="Descrição" 
                    required
                    {...register("description")}/>
                    <input 
                    type="number" 
                    placeholder="Preço" 
                    required
                    {...register("price", {valueAsNumber: true})}/>
                    <input 
                    type="text" 
                    placeholder="Categoria" 
                    required
                    {...register("category")}/>

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

                    <button type="submit" disabled={isSubmitting} >Cadastrar</button>
                  </form>
                </Content>
        </Dialog.Portal>
    )
}