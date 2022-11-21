import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClientes from "../hooks/useClientes";
import useTableOrForm from "../hooks/useTableOrForm";


export default function Home() {

  const { 
    newClient, 
    saveClient, 
    clienteExcluido, 
    selectedClient, 
    cliente, 
    clientes,
    visible,
    setVisible
  } = useClientes()

  
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
