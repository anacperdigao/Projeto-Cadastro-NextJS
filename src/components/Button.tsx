interface ButtonProps {
    className?: string
    children: any
    handleClick?: () => void
}


const Button = ({children, className, handleClick}: ButtonProps) => {

  return (
    <button
    onClick={handleClick}
    className={`bg-gradient-to-r from-green-500 to-green-700 
    text-white px-4 py-2 rounded-md ${className}`}>
        {children}
    </button>
  )
}

export default Button