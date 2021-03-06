import React, { useState } from "react"

export interface UseFormArgs<T extends Record<string, any>> {
    initialValues: T
}

const useForm = <T extends Record<string, any>>(args: UseFormArgs<T>) => {
    const [values, setValues] = useState(args.initialValues)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        console.log(name, value)

        const newValues = {
            ...values,
            [name]: value
        }

        console.log('newValues')
        console.log(newValues)

        setValues(newValues)
    }

    return {
        values,
        handleChange
    }
}

export default useForm