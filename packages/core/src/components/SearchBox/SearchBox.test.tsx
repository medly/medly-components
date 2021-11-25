import { fireEvent, getByPlaceholderText, render, screen } from '@test-utils';
import { SearchBox } from './SearchBox';
import { PlaceholderComponent } from './SearchBox.stories';
import { SearchBoxProps } from './types';

function renderComponent(props: SearchBoxProps) {
    const { container, ...rest } = render(<SearchBox {...props} />);

    return {
        container,
        inputEl: getByPlaceholderText(container, 'search') as HTMLInputElement,
        ...rest
    };
}

describe('SearchBox', () => {
    const sizes: Required<SearchBoxProps>['size'][] = ['S', 'M'];
    test.each(sizes)('should render properly with %p size', size => {
        const { container } = render(<SearchBox size={size} />);
        expect(container).toMatchSnapshot();
    });

    it('should render placeholder text when specified', () => {
        const { inputEl } = renderComponent({ placeholder: 'search' });
        expect(inputEl).toBeInTheDocument();
    });

    it('should render search icon', () => {
        const { getByTitle } = render(<SearchBox />);
        expect(getByTitle('search icon')).toBeInTheDocument();
    });

    it('should call onSearch on clicking on search icon with input value', () => {
        const onSearch = jest.fn();
        const { inputEl, getByTitle } = renderComponent({ onSearch, onInputChange: jest.fn(), placeholder: 'search' });
        fireEvent.change(inputEl, { target: { value: 'R' } });
        fireEvent.click(getByTitle('search icon'));
        expect(onSearch).toHaveBeenCalledWith('R');
    });

    it('should call onSearch on pressing enter key with the input value', () => {
        const onSearch = jest.fn(),
            withOptionCB = { placeholder: 'search', onInputChange: jest.fn(), onSearch };

        const { container, inputEl } = renderComponent(withOptionCB);
        fireEvent.focus(inputEl);
        fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        fireEvent.keyDown(container, { key: 'Enter', code: 13 });
        expect(onSearch).toHaveBeenCalledWith('Dummy');
    });

    it('should call onClear on clicking on clear icon', () => {
        const onClear = jest.fn(),
            { container, inputEl, getByTitle } = renderComponent({ placeholder: 'search', onInputChange: jest.fn(), onClear });
        fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        fireEvent.keyDown(container, { key: 'Enter', code: 13 });
        fireEvent.click(getByTitle('close icon'));
        expect(onClear).toHaveBeenCalledWith();
        expect(inputEl.value).toEqual('');
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

    describe('expand icon', () => {
        const props = {
            placeholder: 'search',
            customSearchFilter: <PlaceholderComponent />
        };

        it('should render expand icon when showExpandIcon prop is true', () => {
            const { queryByTitle } = renderComponent(props);
            expect(queryByTitle('expand icon')).toBeInTheDocument();
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
            renderComponent(props);
            expect(screen.queryByRole('list')).toBeNull();
        });

        it('should hide options when clicked outside', () => {
            const { getByPlaceholderText, getByText } = render(
                    <>
                        <SearchBox {...props} />
                        <span>Outside span</span>
                    </>
                ),
                inputEl = getByPlaceholderText('search') as HTMLInputElement;
            fireEvent.change(inputEl, defaultReturnObj);
            expect(screen.getByRole('list').children).toHaveLength(2);
            fireEvent.click(getByText('Outside span'));
            expect(screen.queryByRole('list')).toBeNull();
        });

        it('should render options when user search option specified', () => {
            const { container, inputEl } = renderComponent({ ...props, size: 'S' });
            fireEvent.change(inputEl, defaultReturnObj);
            expect(screen.getByRole('list').children).toHaveLength(2);
            expect(container).toMatchSnapshot();
        });

        it('should render options on arrow keys when input is in focus', () => {
            const { inputEl } = renderComponent({ ...props, size: 'M' });
            fireEvent.focus(inputEl, defaultReturnObj);
            fireEvent.keyDown(inputEl, { key: 'ArrowDown', code: 40 });
            expect(screen.getByRole('list').children).toHaveLength(2);
        });

        it('should not render options on arrow keys when input is not in focus', () => {
            const { inputEl } = renderComponent(props);
            fireEvent.blur(inputEl, defaultReturnObj);
            fireEvent.keyDown(inputEl, { key: 'ArrowDown', code: 40 });
            expect(screen.queryByRole('list')).toBeNull();
        });

        it('should not call on OptionSelected when onOptionSelected is not passed', () => {
            const { container, inputEl } = renderComponent(props);
            fireEvent.change(inputEl, defaultReturnObj);
            fireEvent.keyDown(inputEl, { key: 'ArrowDown', code: 40 });
            fireEvent.keyDown(container, { key: 'Enter', code: 13 });

            expect(screen.getByRole('list')).toBeInTheDocument();
        });

        describe('with option selected', () => {
            const onOptionSelectedMock = jest.fn();
            const withOptionCB = { ...props, onOptionSelected: onOptionSelectedMock };

            it('should call on OptionSelected when option is clicked', () => {
                const { inputEl } = renderComponent(withOptionCB);
                fireEvent.change(inputEl, defaultReturnObj);
                fireEvent.click(screen.getByText('Dummy 2'));
                expect(onOptionSelectedMock).toHaveBeenCalledWith({ value: 'Dummy 2', label: 'Dummy 2' });
            });

            it('should update the searchbox value to selected option', () => {
                const { container, inputEl } = renderComponent(withOptionCB);
                fireEvent.focus(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl).toHaveValue('Dummy 1');
            });
        });
    });
});
