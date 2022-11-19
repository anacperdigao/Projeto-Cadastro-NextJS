interface BotaoProps {
    className?: string
    children: any
    setMostraForm: (arg: boolean) => void
}


const Botao = ({children, className, setMostraForm}: BotaoProps) => {

  return (
    <button
    onClick={() => setMostraForm(true)} 
    className={`bg-gradient-to-r from-green-500 to-green-700 
    text-white px-4 py-2 rounded-md ${className}`}>
        {children}
    </button>
  )
}

export default Botao