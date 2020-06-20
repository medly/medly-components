import { fireEvent, getByPlaceholderText, getByTitle, render } from '@test-utils';
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

    it('should render close icon when user starts typing', () => {
        const { container } = render(<SearchBox boxSize={'S'} placeholder="search me" />),
            inputEl = getByPlaceholderText(container, 'search me') as HTMLInputElement;
        fireEvent.input(inputEl);
        expect(inputEl.value).toHaveLength(1);
    });

    it('should render options when user search option specified', () => {
        const { container } = render(
            <SearchBox boxSize={'S'} placeholder="search me" searchOptions={[{ value: 'Dummy1 option', label: 'Dummy1 option' }]} />
        );
        expect(container.querySelector('ul')).toHaveLength(1);
        expect(container).toMatchSnapshot(1);
    });
});
