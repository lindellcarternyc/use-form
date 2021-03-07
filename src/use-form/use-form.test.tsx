import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { 
    TextInputExample, NumberInputExample, CheckboxInputExample, CheckboxGroupExample
} from './Input.example'

describe('useForm', () => {
    test('sanity check', () => {
        expect(1 + 1).toBe(2)
    })

    it('should manage a text input', () => {
        // Setup
        render(<TextInputExample />)

        // DOM
        const textInput = screen.getByLabelText(/text input/i)

        // Initial state
        expect(textInput).toHaveProperty('value', '')

        // Type in text
        userEvent.type(textInput, 'hello')
        // Updated state
        expect(textInput).toHaveProperty('value', 'hello')
    })

    it('should manage a number input', () => {
        render(<NumberInputExample value={10} />)
        const numberInput = screen.getByLabelText(/number input/i)
        expect(numberInput).toHaveProperty('value', '10')
        userEvent.type(numberInput, '20')
        expect(numberInput).toHaveProperty('value', '1020')
    })

    it('should manage a checkbox', () => {
        render(<CheckboxInputExample />)
        const checkboxInput = screen.getByLabelText(/checkbox/i)
        expect(checkboxInput).toHaveProperty('checked', false)
        userEvent.click(checkboxInput)
        expect(checkboxInput).toHaveProperty('checked', true)
    })

    it('should handle multiple checkboxes', () => {
        render(<CheckboxGroupExample />)

        const choiceOne = screen.getByLabelText(/one/i)
        const choiceTwo = screen.getByLabelText(/two/i)
        const choiceThree = screen.getByLabelText(/three/i)

        expect(choiceOne).toHaveProperty('checked', false)
        expect(choiceTwo).toHaveProperty('checked', false)
        expect(choiceThree).toHaveProperty('checked', false)

        userEvent.click(choiceOne)
        userEvent.click(choiceTwo)

        expect(choiceOne).toHaveProperty('checked', true)
        expect(choiceTwo).toHaveProperty('checked', true)
        expect(choiceThree).toHaveProperty('checked', false)

        userEvent.click(choiceTwo)
        expect(choiceTwo).toHaveProperty('checked', false)
    })
})