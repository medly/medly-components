import { fireEvent, getByPlaceholderText, render } from '@test-utils';
import React from 'react';
import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
    it('should render placeholder text when specified', () => {
        const { container } = render(<SearchBox placeholder={'Search country'} />);
        const inputNode = getByPlaceholderText(container, 'Search country');
        expect(inputNode).toBeInTheDocument();
    });

    it('should render text box of specified size', () => {
        const { container } = render(<SearchBox />);
        expect(container).toMatchSnapshot();
    });

    it('should render search icon', () => {
        const { getByTestId } = render(<SearchBox />);
        expect(getByTestId('search-icon')).toBeInTheDocument();
    });

    it('should render close icon when user starts typing', () => {
        const { container } = render(<SearchBox placeholder="search me" onSearchInputChange={jest.fn()} />),
            inputEl = getByPlaceholderText(container, 'search me') as HTMLInputElement;
        fireEvent.change(inputEl, { target: { value: 'R' } });
        expect(inputEl.value).toHaveLength(1);
    });

    it('should render options when user search option specified', () => {
        const { container } = render(
                <SearchBox
                    placeholder="search me"
                    onSearchInputChange={jest.fn()}
                    options={[
                        { value: 'Dummy1 option', label: 'Dummy1 option' },
                        { value: 'Dummy2 option', label: 'Dummy2 option' }
                    ]}
                />
            ),
            inputEl = getByPlaceholderText(container, 'search me') as HTMLInputElement;

        fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        expect(container.querySelector('ul').children).toHaveLength(2);
        expect(container).toMatchSnapshot();
    });
});
