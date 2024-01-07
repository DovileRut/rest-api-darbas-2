import { render, screen, fireEvent } from "@testing-library/react"
import ContactUs from "../ContactUs"

test('should be able to type into input', () => {
    render(<ContactUs />)
    const nameInput = screen.getByPlaceholderText('Vardas')
    const emailInput = screen.getByPlaceholderText('El. paštas')
    const messageTextarea = screen.getByPlaceholderText('Jūsų žinutė')
    const submitButton = screen.getByText('Siųsti')
  
    fireEvent.change(nameInput, { target: { value: 'Jonas' } })
    fireEvent.change(emailInput, { target: { value: 'jonas@jonas.lt' } })
    fireEvent.change(messageTextarea, { target: { value: 'Kazkokia zinute' } })
    fireEvent.click(submitButton)

    expect(nameInput.value).toBe("Jonas")
    expect(emailInput.value).toBe("jonas@jonas.lt")
    expect(messageTextarea.value).toBe("Kazkokia zinute")

})

  