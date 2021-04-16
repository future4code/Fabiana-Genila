import { useState } from 'react'

const useForm = (initialForm) => {
    const [value, setValue] = useState(initialForm)

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    const resetForm = () => {
        setValue(initialForm)
    }

    return [value, onChangeValue, resetForm]

}

export default useForm