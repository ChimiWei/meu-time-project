import { render, fireEvent } from '@testing-library/react';
import { CustomInput } from './CustomInput';
type inputProps = {
    value: string
}
it('should render and change input value',  () => {
    const { getByPlaceholderText } = render(<CustomInput value={'key'} setValue={() =>{}}/>)
    const inputElement = (getByPlaceholderText('Insira sua chave')) as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: 'testando'}})
    expect(inputElement.value).toBe('testando')
}) 
