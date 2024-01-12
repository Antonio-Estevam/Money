import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const serchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof serchFormSchema>;

export function SerchForm(){
    const { 
        register, 
        handleSubmit, 
        formState: {
            isSubmitting
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(serchFormSchema),
    })
    function handleSearchTransactions(data: SearchFormInputs){
        console.log(data);
        
    }
    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações"
                {...register("query")}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}