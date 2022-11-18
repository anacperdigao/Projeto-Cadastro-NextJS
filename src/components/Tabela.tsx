import Cliente from "../core/Cliente"

interface TabelaProps{
    clientes: Cliente[]
}

const Tabela = (props: TabelaProps) => {

    function renderizarCabecalho() {
        return(
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    // The optional chaining (?.) operator accesses an object's property or calls a function. 
    // If the object is undefined or null, it returns undefined instead of throwing an error.
    function renderizarDados(){
        return(
            props.clientes?.map((cliente, index) => {
                return(
                    <tr key={cliente.Id}>
                        <td>{cliente.Id}</td>
                        <td>{cliente.Nome}</td>
                        <td>{cliente.Idade}</td>
                    </tr>
                )
            })
        )
    }


    return (
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>

        </table>
    )
}

export default Tabela