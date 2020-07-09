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
        const { getByTitle } = render(<SearchBox />);
        expect(getByTitle('search icon')).toBeInTheDocument();
    });

    describe('close icon', () => {
        const props = {
            placeholder: 'search me',
            onSearchInputChange: jest.fn()
        };

        it('should render close icon when user starts typing', () => {
            const { container, getByTitle } = render(<SearchBox {...props} />),
                inputEl = getByPlaceholderText(container, 'search me') as HTMLInputElement;
            fireEvent.change(inputEl, { target: { value: 'R' } });
            expect(inputEl.value).toHaveLength(1);
            expect(getByTitle('close icon')).toBeInTheDocument();
        });

        it('should not render close icon in initial state', () => {
            const { queryByTitle } = render(<SearchBox {...props} />);
            expect(queryByTitle('close icon')).toBeFalsy();
        });

        it('should hide the close icon and maintain the focus on input when clicked on close icon', () => {
            const { container, getByTitle, queryByTitle } = render(<SearchBox {...props} />),
                inputEl = getByPlaceholderText(container, 'search me') as HTMLInputElement;
            fireEvent.change(inputEl, { target: { value: 'R' } });
            const closeIcon = getByTitle('close icon');
            expect(closeIcon).toBeInTheDocument();
            fireEvent.click(closeIcon);
            expect(inputEl.value).toHaveLength(0);
            expect(queryByTitle('close icon')).toBeNull();
            expect(document.activeElement === inputEl).toBeTruthy();
        });
    });

    describe('options', () => {
        const defaultReturnObj = { target: { value: 'Dummy' } };
        const props = {
            placeholder: 'search me',
            onSearchInputChange: jest.fn(),
            options: [
                { label: 'Dummy 1', value: 'Dummy 1' },
                { label: 'Dummy 2', value: 'Dummy 2' }
            ]
        };

        it('should not show options initially', () => {
            const { container } = render(<SearchBox {...props} />);

            expect(container.querySelector('ul')).toBeNull();
        });

        it('should render options when user search option specified', () => {
            const { container } = render(<SearchBox {...props} />),
                inputEl = getByPlaceholderText(container, 'search me') as HTMLInputElement;

            fireEvent.change(inputEl, defaultReturnObj);
            expect(container.querySelector('ul').children).toHaveLength(2);
            expect(container).toMatchSnapshot();
        });

        it('should call on OptionSelected when option is clicked', () => {
            const onOptionSelectedMock = jest.fn();
            const { container } = render(<SearchBox {...props} onOptionSelected={onOptionSelectedMock} />),
                inputEl = getByPlaceholderText(container, 'search me') as HTMLInputElement;
            fireEvent.change(inputEl, defaultReturnObj);
            fireEvent.click(container.querySelector('#Dummy-2'));
            expect(onOptionSelectedMock).toHaveBeenCalledWith({ value: 'Dummy 2', label: 'Dummy 2' });
        });
    });
});
