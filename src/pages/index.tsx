import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";


export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.Vazio())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clientes = [
    new Cliente('Ana', 30, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente)
    setVisible('form')
  }

  const clienteExcluido = (cliente: Cliente) => {
    console.log(cliente.Nome)
  }

  const saveClient = (cliente: Cliente) => {
    console.log(cliente)
    setVisible('table')
  }

  const newClient = () => {
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
            clienteSelecionado={clienteSelecionado}
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
