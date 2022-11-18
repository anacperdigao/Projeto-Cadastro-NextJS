import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string
    children: any
}


const Layout = (props: LayoutProps) => {
    
  return (
    <div className={`flex flex-col w-2/3 bg-white text-gray-800`}>
        
        <Titulo>{props.titulo}</Titulo>
        <div>

        </div>

    </div>
  )
}

export default Layout