import { getByPlaceholderText, getByTitle, render } from '@test-utils';
import React from 'react';
import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
    it('should render placeholder text when specified', () => {
        const { container } = render(<SearchBox placeholder={'Search country'} />);
        const inputNode = getByPlaceholderText(container, 'Search country');
        expect(inputNode).toBeInTheDocument();
    });

    it('should render text box of specified size', () => {
        const { container } = render(<SearchBox boxSize={'S'} />);
        expect(container).toMatchSnapshot();
    });

    it('should render search icon', () => {
        const { container } = render(<SearchBox boxSize={'S'} />);
        expect(getByTitle(container, 'search')).toHaveLength(1);
    });
});
