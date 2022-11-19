interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readOnly?: boolean 
    onChange?: (value: any) => void
}


const Input = ({text, type, value, readOnly, onChange}: InputProps) => {

    return (

        <div className="flex flex-col mb-4">
            <label className="mb-2">{text}</label>
            <input 
                type={type ?? 'text'} 
                value={value} 
                readOnly={readOnly}
                onChange={e => onChange?.(e.target.value)}
                className={`border border-purple-500 rounded-lg focus:outline-none
                 bg-gray-100 px-4 py-2 ${!readOnly && 'focus:bg-white'}`}    
            />
        </div>
    )
}

export default Input