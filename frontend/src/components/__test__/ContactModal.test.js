import { render, fireEvent } from "@testing-library/react";
import ContactModal from "../ContactModal"

test('renders ContactModal and handles form submission', () => {
    const onClose = jest.fn()

    const { getByPlaceholderText, getByText } = render(
        <ContactModal onClose={onClose} />
    )

    expect(getByPlaceholderText('Vardas')).toBeTruthy();
    expect(getByPlaceholderText('Telefonas')).toBeTruthy();
    expect(getByPlaceholderText('El. paštas')).toBeTruthy();
    expect(getByText('Siųsti')).toBeTruthy();

    fireEvent.submit(getByText('Siųsti'));
    expect(onClose).toHaveBeenCalled();
})