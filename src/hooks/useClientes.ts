import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTableOrForm from "./useTableOrForm"


const useClientes = () => {
    
    const { visible, setVisible } = useTableOrForm()

    const repo: ClienteRepositorio = new ClientCollection() 

    const [cliente, setCliente] = useState<Cliente>(Cliente.Vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
  
  
    useEffect(() => {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        setVisible('table')
      })
    }, [setClientes])

  
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

    return {
        newClient,
        saveClient,
        clienteExcluido,
        selectedClient,
        obterTodos,
        cliente,
        clientes,
        visible,
        setVisible
    }

}

export default useClientes