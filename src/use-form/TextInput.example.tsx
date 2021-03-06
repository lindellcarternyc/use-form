import useForm from './use-form'

const TextInputExample: React.FC = () => {
    const { handleChange, values } = useForm({
        initialValues: {
            text: ''
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

export default TextInputExample