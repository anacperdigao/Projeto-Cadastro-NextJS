import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";


export default function Home() {

  const repo: ClienteRepositorio = new ClientCollection() 

  const [cliente, setCliente] = useState<Cliente>(Cliente.Vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')


  useEffect(() => {
    obterTodos
  }, [])

  const obterTodos = () => {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisible('table')
    })
  }


  function selectedClient (cliente: Cliente) {
    setCliente(cliente)
    setVisible('form')
  }

  async function clienteExcluido (cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function saveClient (cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function newClient () {
    setCliente(Cliente.Vazio())
    setVisible('form')
  }

  
  return (
    <div className={`flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500 text-white`} >

      <Layout titulo="Cadastro Simples">
        {visible === 'table'
        ?
        <>
          <div className="flex justify-end">
            <Button className="mb-4" handleClick={newClient}>Novo Cliente</Button>
          </div>
          <Table 
            clientes={clientes} 
            selectedClient={selectedClient}
            clienteExcluido={clienteExcluido} 
          />
        </>
        :
        <Form
        cliente={cliente}
        canceled={() => setVisible('table')}
        onClientChange={saveClient}
        />
        }



      </Layout>


    </div>
  )
}
