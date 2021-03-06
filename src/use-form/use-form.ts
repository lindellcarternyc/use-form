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

const useForm = <Values extends Record<string, any>>(args: UseFormArgs<Values>) => {
    const [values, setValues] = useState(args.initialValues)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = evt.target

        let updatedValue: typeof values[typeof name]
        if (type === 'checkbox') {
            updatedValue = checked as any
        } else {
            updatedValue = getUpdateValue(values[name], value)
        }

        const newValues: Values = {
            ...values,
            [name]: updatedValue
        }

        setValues(newValues)
    }

    return {
        values,
        handleChange
    }
}

export default useForm