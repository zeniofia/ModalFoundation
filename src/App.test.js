// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModalFoundation title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModalFoundation/i);
    expect(titleElement).toBeInTheDocument();
});
