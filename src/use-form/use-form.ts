import React, { useState } from "react"

export interface UseFormArgs<Values extends Record<string, any>> {
    initialValues: Values
}

const isString = (obj: any): obj is string => typeof obj === 'string'

const isNumber = (obj: any): obj is number => typeof obj === 'number'

const makeType = <Value>(obj: any): Value => {
    return obj
}

const getUpdateValue = <Value>(currentValue: Value, newValue: string): Value => {
    if (isString(currentValue)) {
        return makeType(newValue)
    } else if (isNumber(currentValue)) {
        const numberValue = parseFloat(newValue)
        if (isNaN(numberValue)) {
            return currentValue
        }
        return makeType(numberValue)
    } else {
        throw new Error(`Cannot process newValue: ${newValue}!`)
    }
}

const getUpdateArrayValue = (currentArray: string[], value: string): string[] => {
    if (currentArray.includes(value)) return currentArray.filter(val => val!== value)
    return [...currentArray, value]
}

const useForm = <Values extends Record<string, any>>(args: UseFormArgs<Values>) => {
    const [values, setValues] = useState(args.initialValues)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = evt.target
        
        if (!Object.keys(values).includes(name)) return
        
        const key = name as keyof Values

        const currentValue = values[key]
        let updatedValue: typeof values[typeof key]
        
        if (type === 'checkbox') {
            if (Array.isArray(currentValue)) {
                updatedValue = makeType(getUpdateArrayValue(currentValue, value))
            } else { 
                updatedValue = makeType(checked)
            }
        } else {
            updatedValue = getUpdateValue(currentValue, value)
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