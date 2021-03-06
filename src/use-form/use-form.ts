import React, { useState } from "react"

export interface UseFormArgs<T extends Record<string, any>> {
    initialValues: T
}

const isString = (obj: any): obj is string => typeof obj === 'string'

const isNumber = (obj: any): obj is number => typeof obj === 'number'

const makeType = <Value>(obj: any): Value => {
    return obj
}

const getUpdateValue = (currentValue: any, newValue: string): typeof currentValue => {
    if (isString(currentValue)) {
        return newValue
    } else if (isNumber(currentValue)) {
        const numberValue = parseFloat(newValue)
        if (isNaN(numberValue)) {
            return currentValue
        }
        return numberValue
    }
}

const useForm = <T extends Record<string, any>>(args: UseFormArgs<T>) => {
    const [values, setValues] = useState(args.initialValues)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target

        const newValues = {
            ...values,
            [name]: getUpdateValue(values[name], value)
        }

        setValues(newValues)
    }

    return {
        values,
        handleChange
    }
}

export default useForm