import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import BurgerIcon from './BurgerIcon';

const { render, fireEvent, cleanup } = TestUtils;
afterEach(cleanup);

describe('BurgerIcon component', () => {
    it('should render with default props', () => {
        const { container } = render(<BurgerIcon />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all props given', () => {
        const { container } = render(<BurgerIcon size="M" color="pink" />);
        expect(container).toMatchSnapshot();
    });

    it('should call onClick prop with expected open state', () => {
        const mockOnClick = jest.fn();
        const { container } = render(<BurgerIcon size="M" color="pink" onClick={mockOnClick} />);
        fireEvent.click(container.querySelector('button'));
        expect(mockOnClick).toHaveBeenCalledWith(true);
        fireEvent.click(container.querySelector('button'));
        expect(mockOnClick).toHaveBeenCalledWith(false);
    });
});
