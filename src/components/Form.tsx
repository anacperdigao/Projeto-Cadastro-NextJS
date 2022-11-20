import { useState } from "react"
import Cliente from "../core/Cliente"
import Button from "./Button"
import Input from "./Input"

// if the cliente has an ID, it means that I'm not creating one, but modifying it. 
interface FormProps {
    cliente: Cliente
    onClientChange?: (cliente: Cliente) => void
    canceled?: () => void
}


const Form = ({cliente, canceled, onClientChange}: FormProps) => {

    const id = cliente?.Id // Checking if ID exists
    const [nome, setNome] = useState(cliente?.Nome ?? '')
    const [idade, setIdade] = useState(cliente?.Idade ?? 0)



    return (
        <div>

            {id
            &&
            <Input 
            text="Código" 
            readOnly 
            value={id}
            />
            }

            <Input 
                text="Nome" 
                type="text" 
                value={nome}
                onChange={setNome}
            />
            <Input 
                text="Idade" 
                type="number" 
                value={idade}
                onChange={setIdade}
            />

            <div className="flex justify-end mt-7">
                <Button className="mr-2" handleClick={() => onClientChange?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button handleClick={canceled}>
                    Cancelar
                </Button>
            </div>
        </div>
  )
}

export default Form