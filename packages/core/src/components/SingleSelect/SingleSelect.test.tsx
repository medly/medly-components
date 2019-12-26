import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { SingleSelect } from './SingleSelect';

const { act, render, fireEvent, cleanup } = TestUtils;
afterEach(cleanup);

describe('SingleSelect component', () => {
    const options = [
        { value: 'all', label: 'All' },
        { value: 'Dummy1', label: 'Dummy1' },
        { value: 'Dummy2', label: 'Dummy2' }
    ];

    it('should render correctly with default props', () => {
        const { container } = render(<SingleSelect options={options} />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const mockOnChange = jest.fn();
        const { container } = render(
            <SingleSelect
                disabled
                minWidth={300}
                options={options}
                value="all"
                labelPosition="left"
                fullWidth
                required
                label="Pharmacy"
                description="We will show reports based on Pharmacy"
                descriptionColor="grey"
                placeholder="Please Select"
                onChange={mockOnChange}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render options correctly', () => {
        const { container, getByTestId } = render(<SingleSelect options={options} />);
        expect(container).toMatchSnapshot();
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        act(() => {
            fireEvent.click(inputEl);
        });
        expect(container).toMatchSnapshot();
    });

    it('should not render options when clicked outside', () => {
        const { container, getByTestId, getByText } = render(
            <div>
                <p>Outer Element</p>
                <SingleSelect options={options} />
            </div>
        );
        expect(container).toMatchSnapshot();
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        act(() => {
            fireEvent.click(inputEl);
        });
        act(() => {
            fireEvent.click(getByText('Outer Element'));
        });
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when one of the option selected', () => {
        const mockOnChange = jest.fn();
        const { getByTestId, getByText } = render(<SingleSelect options={options} onChange={mockOnChange} />);
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        act(() => {
            fireEvent.click(inputEl);
        });
        const option = getByText('Dummy1');
        act(() => {
            fireEvent.click(option);
        });
        expect(inputEl.value).toEqual('Dummy1');
        expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
    });

    it('should not select option which is disable', () => {
        const mockOnChange = jest.fn();
        const { getByTestId, getByText } = render(
            <SingleSelect
                value="Dummy1"
                options={[...options, { value: 'Dummy3', label: 'Dummy3', disabled: true }]}
                onChange={mockOnChange}
            />
        );
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        act(() => {
            fireEvent.click(inputEl);
        });
        const option = getByText('Dummy3');
        act(() => {
            fireEvent.click(option);
        });
        expect(inputEl.value).toEqual('Dummy1');
        expect(mockOnChange).not.toBeCalled();
    });

    it('should not call onChange if user click on the already selected option', () => {
        const mockOnChange = jest.fn();
        const { getByTestId, getByText } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />);
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        act(() => {
            fireEvent.click(inputEl);
        });
        const option = getByText('Dummy1');
        act(() => {
            fireEvent.click(option);
        });
        expect(mockOnChange).not.toHaveBeenCalledWith('Dummy1');
    });

    it('should render matched options when input values changes', async () => {
        const { container, getByTestId } = render(<SingleSelect options={options} />);
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        act(() => {
            fireEvent.click(inputEl);
            fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        });
        expect(container).toMatchSnapshot();
    });

    it('should render all the options when input value is not matched to any option', async () => {
        const { container, getByTestId } = render(<SingleSelect options={options} />);
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        act(() => {
            fireEvent.click(inputEl);
            fireEvent.change(inputEl, { target: { value: 'Hello' } });
        });
        expect(container).toMatchSnapshot();
    });

    it('should close options when clicked outside', async () => {
        const { container, getByTestId, getByText } = render(
            <>
                <p>Outer</p>
                <SingleSelect options={options} />
            </>
        );
        const inputEl = getByTestId('select-input') as HTMLInputElement;
        const outer = getByText('Outer');
        act(() => {
            fireEvent.click(inputEl);
            fireEvent.click(outer);
        });
        expect(container).toMatchSnapshot();
    });

    describe('on pressing', () => {
        it('down arrow should change input', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />);
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
            expect(inputEl.value).toEqual('Dummy2');
            expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
        });

        it('down arrow on the last option should change input value to the first option', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(<SingleSelect value="Dummy2" options={options} onChange={mockOnChange} />);
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
            expect(inputEl.value).toEqual('All');
            expect(mockOnChange).toHaveBeenCalledWith('all');
        });

        it('down arrow and last option is disabled then input value should be first option', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(
                <SingleSelect
                    value="Dummy2"
                    options={[...options, { value: 'Dummy3', label: 'Dummy3', disabled: true }]}
                    onChange={mockOnChange}
                />
            );
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
            expect(inputEl.value).toEqual('All');
            expect(mockOnChange).toHaveBeenCalledWith('all');
        });

        it('down arrow and next option is disabled then input value should be the next non-disabled option', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(
                <SingleSelect
                    value="Dummy2"
                    options={[...options, { value: 'Dummy3', label: 'Dummy3', disabled: true }, { value: 'Dummy4', label: 'Dummy4' }]}
                    onChange={mockOnChange}
                />
            );
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
            expect(inputEl.value).toEqual('Dummy4');
            expect(mockOnChange).toHaveBeenCalledWith('Dummy4');
        });

        it('up arrow should change input value', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(<SingleSelect value="Dummy2" options={options} onChange={mockOnChange} />);
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
            expect(inputEl.value).toEqual('Dummy1');
            expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
        });

        it('up arrow on the first option should change input value to the last option', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(<SingleSelect value="all" options={options} onChange={mockOnChange} />);
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
            expect(inputEl.value).toEqual('Dummy2');
            expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
        });

        it('up arrow and prev option is disabled then input value should be prev non-disabled option', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(
                <SingleSelect
                    value="Dummy4"
                    options={[...options, { value: 'Dummy3', label: 'Dummy3', disabled: true }, { value: 'Dummy4', label: 'Dummy4' }]}
                    onChange={mockOnChange}
                />
            );
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
            expect(inputEl.value).toEqual('Dummy2');
            expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
        });

        it('up arrow on second option and first option is disabled then input value should be the last option', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(
                <SingleSelect
                    value="all"
                    options={[{ value: 'Dummy3', label: 'Dummy3', disabled: true }, ...options]}
                    onChange={mockOnChange}
                />
            );
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
            expect(inputEl.value).toEqual('Dummy2');
            expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
        });

        it('enter button should close options', async () => {
            const mockOnChange = jest.fn();
            const { getByTestId, container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />);
            const inputEl = getByTestId('select-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
            fireEvent.keyDown(container, { key: 'Enter', code: 13 });
            expect(inputEl.value).toEqual('Dummy2');
            expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
        });

        it('enter button when option are not visible should not change input value', async () => {
            const mockOnChange = jest.fn();
            const { container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />);
            fireEvent.keyDown(container, { key: 'Enter', code: 13 });
            expect(container).toMatchSnapshot();
        });
    });
});
