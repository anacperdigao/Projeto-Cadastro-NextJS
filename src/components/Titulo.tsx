
const Titulo = (props: { children: any }) => {

  return (

    <div className="flex flex-col justify-center">
        <h1 className="px-5 py-2">
            {props.children}
        </h1>
        <hr />
    </div>

  )
}

export default Titulo