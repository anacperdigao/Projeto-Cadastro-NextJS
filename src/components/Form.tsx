import { useState } from "react"
import Cliente from "../core/Cliente"
import Input from "./Input"

// if the cliente has an ID, it means that I'm not creating one, but modifying it. 
interface FormProps {
    cliente: Cliente
}


const Form = ({cliente}: FormProps) => {

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
        </div>
  )
}

export default Form