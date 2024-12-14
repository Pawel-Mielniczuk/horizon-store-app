import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App';

describe('Random Component', () => {
    it('renders correctly', () => {
        render(<App />);
        screen.debug();
        const element = screen.getByText('Hello World');
        expect(element).toBeInTheDocument();
    })
})