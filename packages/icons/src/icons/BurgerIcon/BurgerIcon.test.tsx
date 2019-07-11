import { TestUtils } from '@medly-components/utils';
import React from 'react';
import BurgerIcon from './BurgerIcon';

const { render, cleanup } = TestUtils;
afterEach(cleanup);

describe('BurgerIcon component', () => {
    it('should render with default props', () => {
        const { container } = render(<BurgerIcon />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all props given', () => {
        const { container } = render(<BurgerIcon size="M" color="pink" open />);
        expect(container).toMatchSnapshot();
    });
});
