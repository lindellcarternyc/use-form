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

export const CheckboxInputExample: React.FC<{ checked?: boolean }> = ({ checked }) => {
    const {
        values, handleChange
    } = useForm({
        initialValues: {
            checkbox: checked || false
        }
    })

    return (
        <>
            <label htmlFor="checkbox">Checkbox</label>
            <input 
                type="checkbox"
                id="checkbox"
                checked={values.checkbox}
                onChange={handleChange}
                name="checkbox"
            />
        </>
    )
}

export const CheckboxGroupExample: React.FC = () => {
    interface State {
        choices: string[]
    }

    const { values, handleChange } = useForm<State>({
        initialValues: {
            choices: []
        }
    })
    return (
        <>
            <label htmlFor="one">Choice one</label>
            <input type="checkbox" id="one" name="choices" value="one" onChange={handleChange} checked={values.choices.includes("one")}/>
            <label htmlFor="two">Choice two</label>
            <input type="checkbox" id="two" name="choices" value="two" onChange={handleChange} checked={values.choices.includes("two")} />
            <label htmlFor="three">Choice three</label>
            <input type="checkbox" id="three" name="choices" value="three" onChange={handleChange} checked={values.choices.includes("three")} />
        </>
    )
}

export const RadioInputExample: React.FC = () => {
    const { values, handleChange } = useForm({
        initialValues: {
            option: ''
        }
    })
    return (
        <>
            <label htmlFor="radio1">Radio 1</label>
            <input type="radio" name="option" id="radio1" value="radio 1" checked={values.option === 'radio 1'} onChange={handleChange} />
            <label htmlFor="radio2">Radio 2</label>
            <input type="radio" name="option" id="radio2" value="radio 2" checked={values.option === 'radio 2'} onChange={handleChange} />
            <label htmlFor="radio3">Radio 3</label>
            <input type="radio" name="option" id="radio3" value="radio 3" checked={values.option === 'radio 3'} onChange={handleChange} />
        </>
    )
}