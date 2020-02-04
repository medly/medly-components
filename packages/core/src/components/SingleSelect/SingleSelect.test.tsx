import { cleanup, fireEvent, render } from '@test-utils';
import React from 'react';
import { SingleSelect } from './SingleSelect';

describe('SingleSelect component', () => {
    afterEach(cleanup);

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
        const { container } = render(<SingleSelect options={options} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.click(inputEl);
        expect(container.querySelector('#medly-popover')).toBeVisible();
    });

    it('should hide options on click outside of the container', () => {
        const { container } = render(
            <div>
                <p id="sibling">Outer Element</p>
                <SingleSelect options={options} />
            </div>
        );
        fireEvent.click(container.querySelector('#medly-singleSelect-input'));
        fireEvent.click(container.querySelector('#sibling'));
        expect(container.querySelector('#medly-popover')).toBeNull();
    });

    it('should not show options on click outside of the container', () => {
        const { container } = render(
            <div>
                <p id="sibling">Outer Element</p>
                <SingleSelect options={options} />
            </div>
        );
        fireEvent.click(container.querySelector('#sibling'));
        expect(container.querySelector('#medly-popover')).toBeNull();
    });

    it('should show selected option label in input', () => {
        const mockOnChange = jest.fn(),
            { container, getByText } = render(<SingleSelect options={options} onChange={mockOnChange} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;

        fireEvent.click(inputEl);
        fireEvent.click(getByText('Dummy1'));
        expect(inputEl.value).toEqual('Dummy1');
        expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
    });

    it('should not select option which is disable', () => {
        const mockOnChange = jest.fn(),
            { container, getByText } = render(
                <SingleSelect
                    value="Dummy1"
                    options={[...options, { value: 'Dummy3', label: 'Dummy3', disabled: true }]}
                    onChange={mockOnChange}
                />
            );
        const inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.click(inputEl);
        fireEvent.click(getByText('Dummy3'));
        expect(inputEl.value).toEqual('Dummy1');
        expect(mockOnChange).not.toBeCalled();
    });

    it('should render matched options when input values changes', async () => {
        const { container, queryByText } = render(<SingleSelect options={options} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.click(inputEl);
        fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        expect(queryByText('All')).toBeNull();
    });

    it('should render all the options when input value is not matched to any option', async () => {
        const { container, getByText } = render(<SingleSelect options={options} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.click(inputEl);
        fireEvent.change(inputEl, { target: { value: 'Hello' } });
        expect(getByText('All')).toBeVisible();
        expect(getByText('Dummy1')).toBeVisible();
        expect(getByText('Dummy2')).toBeVisible();
    });

    describe('on pressing', () => {
        afterEach(cleanup);

        describe('down arrow', () => {
            it('should change input', async () => {
                const mockOnChange = jest.fn(),
                    { container, getByText } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.focus(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy2');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
            });

            it('should change input value to the first option when currently selected options is the last option ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy2" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('All');
                expect(mockOnChange).toHaveBeenCalledWith('all');
            });

            it('should change input value to the first option when there is no option selected ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('All');
                expect(mockOnChange).toHaveBeenCalledWith('all');
            });

            it('should change input value to the first option when last option is disabled', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(
                        <SingleSelect
                            value="Dummy2"
                            options={[...options, { value: 'Dummy3', label: 'Dummy3', disabled: true }]}
                            onChange={mockOnChange}
                        />
                    ),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('All');
                expect(mockOnChange).toHaveBeenCalledWith('all');
            });

            it('should change input value to the next non-disabled option', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(
                        <SingleSelect
                            value="Dummy2"
                            options={[
                                ...options,
                                { value: 'Dummy3', label: 'Dummy3', disabled: true },
                                { value: 'Dummy4', label: 'Dummy4' }
                            ]}
                            onChange={mockOnChange}
                        />
                    ),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy4');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy4');
            });
        });

        describe('up arrow', () => {
            it('should change input value', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy2" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy1');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
            });

            it('should change input value to the last option when currently selected option is the first option', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="all" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy2');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
            });

            it('should change input value to the last option when there is no option selected ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy2');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
            });

            it('should change input value to the prev non-disabled option', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(
                        <SingleSelect
                            value="Dummy4"
                            options={[
                                ...options,
                                { value: 'Dummy3', label: 'Dummy3', disabled: true },
                                { value: 'Dummy4', label: 'Dummy4' }
                            ]}
                            onChange={mockOnChange}
                        />
                    ),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy2');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
            });

            it('should change input value to the last option when first option is disabled and second is currently selected', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(
                        <SingleSelect
                            value="all"
                            options={[{ value: 'Dummy3', label: 'Dummy3', disabled: true }, ...options]}
                            onChange={mockOnChange}
                        />
                    ),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy2');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
            });
        });

        describe('enter button', () => {
            it('should close options', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy2');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy2');
            });

            it('should not change input value when option are not visible', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="All" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.change(inputEl, { target: { value: 'Dummy' } });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy');
                expect(container.querySelector('#medly-popover')).toBeVisible();
            });
        });
    });
});
