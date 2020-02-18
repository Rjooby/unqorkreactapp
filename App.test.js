import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Bored Logo Link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("BORED?");
    expect(linkElement).toBeInTheDocument();
});
