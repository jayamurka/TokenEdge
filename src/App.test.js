// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenEdge/i);
    expect(titleElement).toBeInTheDocument();
});
