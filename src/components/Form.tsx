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
    const [name, setName] = useState(cliente?.Nome ?? '')
    const [age, setAge] = useState(cliente?.Idade ?? 0)



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
                value={name}
                onChange={setName}
            />
            <Input 
                text="Idade" 
                type="number" 
                value={age}
                onChange={setAge}
            />

            <div className="flex justify-end mt-7">
                <Button className="mr-2" handleClick={() => onClientChange?.(new Cliente(name, +age, id))}>
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