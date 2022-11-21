import { useState } from "react"


const useTableOrForm = () => {

    const [visible, setVisible] = useState<'table' | 'form'>('table')

    return {
        visible,
        setVisible
    }

}

export default useTableOrForm