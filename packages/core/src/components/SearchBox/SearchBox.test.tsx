import { fireEvent, getByPlaceholderText, render } from '@test-utils';
import React from 'react';
import { SearchBox } from './SearchBox';
import { Props } from './types';

function renderComponent(props: Props) {
    const { container, ...rest } = render(<SearchBox {...props} />);

    return {
        container,
        inputEl: getByPlaceholderText(container, 'search') as HTMLInputElement,
        ...rest
    };
}

describe('SearchBox', () => {
    it('should render placeholder text when specified', () => {
        const { inputEl } = renderComponent({ placeholder: 'search' });
        expect(inputEl).toBeInTheDocument();
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
            placeholder: 'search',
            onInputChange: jest.fn()
        };

        it('should render close icon when user starts typing', () => {
            const { inputEl, getByTitle } = renderComponent(props);
            fireEvent.change(inputEl, { target: { value: 'R' } });
            expect(inputEl.value).toHaveLength(1);
            expect(getByTitle('close icon')).toBeInTheDocument();
        });

        it('should not render close icon in initial state', () => {
            const { queryByTitle } = renderComponent(props);
            expect(queryByTitle('close icon')).toBeFalsy();
        });

        it('should hide the close icon and maintain the focus on input when clicked on close icon', () => {
            const { inputEl, getByTitle, queryByTitle } = renderComponent(props);
            fireEvent.change(inputEl, { target: { value: 'R' } });
            const closeIcon = getByTitle('close icon');
            expect(closeIcon).toBeInTheDocument();
            fireEvent.click(closeIcon);
            expect(inputEl.value).toHaveLength(0);
            expect(queryByTitle('close icon')).toBeNull();
            expect(document.activeElement === inputEl).toBeTruthy();
        });

        it('should hide the close icon when length of input is 0', () => {
            const { inputEl, queryByTitle } = renderComponent(props);
            fireEvent.change(inputEl, { target: { value: 'R' } });
            fireEvent.change(inputEl, { target: { value: '' } });
            expect(queryByTitle('close icon')).toBeNull();
        });
    });

    describe('options', () => {
        const defaultReturnObj = { target: { value: 'Dummy' } };
        const props = {
            placeholder: 'search',
            onInputChange: jest.fn(),
            options: [
                { label: 'Dummy 1', value: 'Dummy 1' },
                { label: 'Dummy 2', value: 'Dummy 2' }
            ]
        };

        it('should not show options initially', () => {
            const { container } = renderComponent(props);

            expect(container.querySelector('ul')).toBeNull();
        });

        it('should render options when user search option specified', () => {
            const { container, inputEl } = renderComponent(props);

            fireEvent.change(inputEl, defaultReturnObj);
            expect(container.querySelector('ul').children).toHaveLength(2);
            expect(container).toMatchSnapshot();
        });

        it('should not call on OptionSelected when onOptionSelected is not passed', () => {
            const { container, inputEl } = renderComponent(props);
            fireEvent.change(inputEl, defaultReturnObj);
            fireEvent.keyDown(inputEl, { key: 'ArrowDown', code: 40 });
            fireEvent.keyDown(container, { key: 'Enter', code: 13 });

            expect(container.querySelector('ul')).toBeInTheDocument();
        });

        describe('with option selected', () => {
            const onOptionSelectedMock = jest.fn();
            const withOptionCB = { ...props, onOptionSelected: onOptionSelectedMock };

            it('should call on OptionSelected when option is clicked', () => {
                const { container, inputEl } = renderComponent(withOptionCB);
                fireEvent.change(inputEl, defaultReturnObj);
                fireEvent.click(container.querySelector('#Dummy-2'));
                expect(onOptionSelectedMock).toHaveBeenCalledWith({ value: 'Dummy 2', label: 'Dummy 2' });
            });

            it('should update the searchbox value to selected option', () => {
                const { container, inputEl } = renderComponent(withOptionCB);
                fireEvent.change(inputEl, { target: { value: 'R' } });
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl).toHaveValue('Dummy 1');
            });

            it('should not show options when input value is empty', () => {
                const { container, inputEl, getByTitle } = renderComponent(withOptionCB);
                fireEvent.change(inputEl, { target: { value: 'R' } });
                fireEvent.click(getByTitle('close icon'));
                fireEvent.keyDown(inputEl, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(inputEl, { key: 'ArrowUp', code: 38 });
                expect(container.querySelector('ul')).toBeNull();
            });
        });
    });
});
