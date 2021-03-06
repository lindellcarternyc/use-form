import useForm from './use-form'

export const TextInputExample: React.FC<{ value?: string }> = ({ value }) => {
    const { handleChange, values } = useForm({
        initialValues: {
            text: value || ''
        }
    })
    return (
        <>
            <label htmlFor="test-text">Text Input</label>
            <input 
                type="text"
                id="test-text"
                value={values.text}
                onChange={handleChange}
                name="text"
            />
        </>
    )
}

export const NumberInputExample: React.FC<{ value?: number }> = ({ value }) => {
    const {
        values, handleChange
     } = useForm({
        initialValues: {
            age: value || 0
        }
    })

    return (
        <>
            <label htmlFor="test-number">Number Input</label>
            <input 
                type="number"
                name="age"
                value={values.age}
                onChange={handleChange}
                id="test-number"
            />
        </>
    )
}