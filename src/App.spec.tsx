import { render } from '@testing-library/react';
import App from './App';

it('should render a page with a text', () => {
    const { getByText } = render(<App />)

    expect(getByText('Oi')).toBeInTheDocument()
}) 
