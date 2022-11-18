import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

const Tabela = ({clientes, clienteSelecionado, clienteExcluido}: TabelaProps) => {

    const exibirAcoes = clienteSelecionado || clienteExcluido

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
                        <td className="text-left p-4">{cliente.Id}</td>
                        <td className="text-left p-4">{cliente.Nome}</td>
                        <td className="text-left p-4">{cliente.Idade}</td>
                        {exibirAcoes && renderizarAcoes(cliente)}
                    </tr>
                )
            })
        )
    }



    function renderizarAcoes(cliente: Cliente) {
        return(
            <td className="flex justify-center">

                {clienteSelecionado
                &&                 
                <button 
                onClick={() => clienteSelecionado?.(cliente)}
                className={`flex justify-center items-center text-green-600 
                rounded-full hover:bg-purple-50 p-2 m-1`}>
                    {IconeEdicao}
                </button>
                }
 
                {clienteExcluido
                &&
                <button 
                onClick={() => clienteExcluido?.(cliente)} 
                className={`flex justify-center items-center text-red-500 
                rounded-full hover:bg-purple-50 p-2 m-1`}>
                    {IconeLixo}
                </button>
                }

            </td>
        )
    }


    return (
        <table className="w-full rounded-xl overflow-hidden">
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

export default Tabela