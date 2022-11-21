import Title from "./Title"

interface LayoutProps {
    titulo: string
    children: any
}


const Layout = ({titulo, children}: LayoutProps) => {

  return (
    <div className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md max-[480px]:w-11/12`}>
        
        <Title>{titulo}</Title>
        <div className="p-6">
            {children}
        </div>

    </div>
  )
}

export default Layout