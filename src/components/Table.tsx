import Cliente from "../core/Cliente"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps{
    clientes: Cliente[]
    selectedClient?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

const Table = ({clientes, selectedClient, clienteExcluido}: TableProps) => {

    const exibirAcoes = selectedClient || clienteExcluido

    function renderizarCabecalho() {
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes
                &&
                <th className="p-4">Ações</th>                
                }

            </tr>
        )
    }

    // The optional chaining (?.) operator accesses an object's property or calls a function. 
    // If the object is undefined or null, it returns undefined instead of throwing an error.
    function renderizarDados(){
        return(
            clientes?.map((cliente, index) => {
                return(
                    <tr key={cliente.Id} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                        <td className="text-left p-4 max-[480px]:p-2">{cliente.Id.slice(0,7)}</td>
                        <td className="text-left p-4 max-[480px]:p-2">{cliente.Nome}</td>
                        <td className="text-left p-4 max-[480px]:p-2 max-[480px]:text-center ">{cliente.Idade}</td>
                        {exibirAcoes && renderizarAcoes(cliente)}
                    </tr>
                )
            })
        )
    }



    function renderizarAcoes(cliente: Cliente) {
        return(
            <td className="flex justify-center">

                {selectedClient
                &&                 
                <button 
                onClick={() => selectedClient?.(cliente)}
                className={`flex justify-center items-center text-green-600 
                rounded-full hover:bg-purple-50 p-2 m-1 max-[480px]:p-1`}>
                    {IconEdit}
                </button>
                }
 
                {clienteExcluido
                &&
                <button 
                onClick={() => clienteExcluido?.(cliente)} 
                className={`flex justify-center items-center text-red-500 
                rounded-full hover:bg-purple-50 p-2 m-1 max-[480px]:p-1`}>
                    {IconTrash}
                </button>
                }

            </td>
        )
    }


    return (
        <table className="w-full rounded-xl overflow-hidden max-[480px]:text-xs">
            <thead className={`
                text-gray-100 
                bg-gradient-to-r from-purple-500 to-purple-800`
            }>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>
    )
}

export default Table