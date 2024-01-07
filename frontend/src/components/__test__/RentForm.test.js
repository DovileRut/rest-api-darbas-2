import { render, screen, fireEvent } from '@testing-library/react'
import RentForm from "../RentForm.js"
import { RentContextProvider } from '../../context/RentContext.js'
import '@testing-library/jest-dom/extend-expect' 
// Cia naudoju sita, nes @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain, tik taip pavyko praeiti testa

test('renders RentForm correctly', () => {
    render(
      <RentContextProvider>
        <RentForm />
      </RentContextProvider>
    )
  
    const vardasLabel = screen.getByText('Jūsų vardas:')
    const miestasLabel = screen.getByText('Miestas:')
    const pridetiMygtukas = screen.getByRole('button', { name: /Prideti nuomos pasiūlymą/ })
})