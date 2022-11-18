import Cliente from "../core/Cliente"

interface TabelaProps{
    clientes: Cliente[]
}

const Tabela = (props: TabelaProps) => {

    function renderizarCabecalho() {
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
            </tr>
        )
    }

    // The optional chaining (?.) operator accesses an object's property or calls a function. 
    // If the object is undefined or null, it returns undefined instead of throwing an error.
    function renderizarDados(){
        return(
            props.clientes?.map((cliente, index) => {
                return(
                    <tr key={cliente.Id} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                        <td className="text-left p-4">{cliente.Id}</td>
                        <td className="text-left p-4">{cliente.Nome}</td>
                        <td className="text-left p-4">{cliente.Idade}</td>
                    </tr>
                )
            })
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