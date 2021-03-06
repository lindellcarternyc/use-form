import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { 
    TextInputExample, NumberInputExample
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
})