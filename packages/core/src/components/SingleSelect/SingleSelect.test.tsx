import { cleanup, fireEvent, render, wait } from '@test-utils';
import React from 'react';
import { SingleSelect } from './SingleSelect';
import { SelectProps } from './types';

describe('SingleSelect component', () => {
    afterEach(cleanup);

    const options = [
        { value: 'all', label: 'All' },
        { value: 'Dummy1', label: 'Dummy1' },
        {
            value: [
                { value: 'Some 1', label: 'Some 1' },
                { value: 'Some 2', label: 'Some 2' }
            ],
            label: 'Dummy2'
        },
        {
            value: 'Dummy3',
            label: 'Dummy3'
        }
    ];

    describe.each(['outlined', 'filled'])('with %s variant', (variant: SelectProps['variant']) => {
        it('should render properly', () => {
            const { container } = render(<SingleSelect options={options} variant={variant} value="dummy" />);
            expect(container).toMatchSnapshot();
        });

        it('should render disabled state properly ', () => {
            const { container } = render(<SingleSelect disabled options={options} variant={variant} value="dummy" />);
            expect(container).toMatchSnapshot();
        });

        it('should render error text properly', () => {
            const { container } = render(
                <SingleSelect errorText="Something went wrong" options={options} variant={variant} value="dummy" />
            );
            expect(container.querySelector('span')).toMatchSnapshot();
            expect(container.querySelector('svg')).toMatchSnapshot();
        });

        it('should render options correctly on click on the input', () => {
            const { container } = render(<SingleSelect options={options} variant={variant} />),
                inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
            fireEvent.click(inputEl);
            expect(container.querySelector('#medly-singleSelect-options')).toMatchSnapshot();
        });
    });

    it('should render input in readOnly state by default', async () => {
        const { container } = render(<SingleSelect value="Dummy1" options={options} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        expect(inputEl).toHaveAttribute('readonly');
    });

    it('should take parents width if we pass fullWidth prop as true', () => {
        const { container } = render(<SingleSelect fullWidth options={options} value="dummy" />);
        expect(container.querySelector('div')).toHaveStyle(`
            display: flex;
            width: 100%;
            margin: 0.8rem 0px;
        `);
    });

    it('should take passed min width', () => {
        const { container } = render(<SingleSelect options={options} value="dummy" minWidth="30rem" />);
        expect(container.querySelector('div')).toHaveStyle(`
            min-width: 30rem;
        `);
    });

    it('should show options on click on drop icon', () => {
        const { container } = render(<SingleSelect options={options} />);
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#medly-singleSelect-options')).toBeVisible();
    });

    it('should not show options on click on drop icon, if disabled prop is set true', () => {
        const { container } = render(<SingleSelect options={options} disabled />);
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#medly-singleSelect-options')).toBeNull();
    });

    it('should hide options on click on drop icon, if options are already visible', () => {
        const { container } = render(<SingleSelect options={options} />);
        fireEvent.click(container.querySelector('svg'));
        fireEvent.click(container.querySelector('svg'));
        expect(container.querySelector('#medly-singleSelect-options')).toBeNull();
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
        expect(container.querySelector('#medly-singleSelect-options')).toBeNull();
    });

    it('should not show options on click outside of the container', () => {
        const { container } = render(
            <div>
                <p id="sibling">Outer Element</p>
                <SingleSelect options={options} />
            </div>
        );
        fireEvent.click(container.querySelector('#sibling'));
        expect(container.querySelector('#medly-singleSelect-options')).toBeNull();
    });

    it('should show the selected option label in input on click on the option', () => {
        const mockOnChange = jest.fn(),
            { container, getByText } = render(<SingleSelect options={options} onChange={mockOnChange} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;

        fireEvent.click(inputEl);
        fireEvent.click(getByText('Dummy1'));
        expect(inputEl.value).toEqual('Dummy1');
        expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
    });

    it('should show the nested options on click on the option with nested option', () => {
        const mockOnChange = jest.fn(),
            { container, getByText } = render(<SingleSelect options={options} onChange={mockOnChange} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;

        fireEvent.click(inputEl);
        fireEvent.click(getByText('Dummy2'));
        expect(container.querySelector('#Dummy2-options')).toBeInTheDocument();
    });

    it('should not select option on click on the disable option', () => {
        const mockOnChange = jest.fn(),
            { container, getByText } = render(
                <SingleSelect
                    value="Dummy1"
                    options={[...options, { value: 'Dummy4', label: 'Dummy4', disabled: true }]}
                    onChange={mockOnChange}
                />
            );
        const inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.click(inputEl);
        fireEvent.click(getByText('Dummy4'));
        expect(inputEl.value).toEqual('Dummy1');
        expect(mockOnChange).not.toBeCalled();
    });

    it('should render matched options when input values changes', async () => {
        const { container, queryByText } = render(<SingleSelect options={options} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        expect(queryByText('All')).toBeNull();
        expect(container.querySelector('#medly-singleSelect-options')).toBeVisible();
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

    it('should call onFocus function on focusing on input', async () => {
        const mockOnFocus = jest.fn(),
            { container } = render(<SingleSelect value="Dummy1" options={options} onFocus={mockOnFocus} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.focus(inputEl);
        expect(mockOnFocus).toHaveBeenCalled();
    });

    it('should call onBlur function on moving focus out of input', async () => {
        const mockOnBlur = jest.fn(),
            { container } = render(<SingleSelect value="Dummy1" options={options} onBlur={mockOnBlur} />),
            inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
        fireEvent.click(inputEl);
        fireEvent.blur(inputEl);
        expect(mockOnBlur).toHaveBeenCalled();
        await wait(() => expect(container.querySelector('#medly-singleSelect-options')).toBeNull(), { timeout: 200 });
    });

    it('should handle builtin form validation', () => {
        const { container } = render(<SingleSelect withBuiltInValidation options={options} />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly when isSearchable is true', () => {
        const { container } = render(<SingleSelect isSearchable disabled={false} options={options} />);
        expect(container).toMatchSnapshot();
    });

    describe('on pressing', () => {
        afterEach(cleanup);

        describe('down arrow', () => {
            it('should show options if input is in focus and options are not visible', async () => {
                const { container } = render(<SingleSelect value="Dummy1" options={options} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.focus(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                expect(container.querySelector('#medly-singleSelect-options')).toBeVisible();
            });

            it('should change input', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="all" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy1');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
            });

            it('should change input value to the first option when currently selected options is the last option ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy3" options={options} onChange={mockOnChange} />),
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
                            value="Dummy3"
                            options={[...options, { value: 'Dummy4', label: 'Dummy4', disabled: true }]}
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
                            value="Dummy4"
                            options={[
                                ...options,

                                { value: 'Dummy4', label: 'Dummy4' },
                                { value: 'Dummy5', label: 'Dummy5', disabled: true },
                                { value: 'Dummy6', label: 'Dummy6' }
                            ]}
                            onChange={mockOnChange}
                        />
                    ),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy6');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy6');
            });
        });

        describe('up arrow', () => {
            it('should show options if input is in focus and options are not visible', async () => {
                const { container } = render(<SingleSelect value="Dummy1" options={options} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.focus(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                expect(container.querySelector('#medly-singleSelect-options')).toBeVisible();
            });

            it('should change input value', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Some 1" options={options} onChange={mockOnChange} />),
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
                expect(inputEl.value).toEqual('Dummy3');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy3');
            });

            it('should change input value to the last option when there is no option selected ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy3');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy3');
            });

            it('should change input value to the prev non-disabled option', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(
                        <SingleSelect
                            value="Dummy5"
                            options={[
                                ...options,
                                { value: 'Dummy4', label: 'Dummy4', disabled: true },
                                { value: 'Dummy5', label: 'Dummy5' }
                            ]}
                            onChange={mockOnChange}
                        />
                    ),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy3');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy3');
            });

            it('should change input value to the last option when first option is disabled and second is currently selected', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(
                        <SingleSelect
                            value="all"
                            options={[{ value: 'Dummy4', label: 'Dummy4', disabled: true }, ...options]}
                            onChange={mockOnChange}
                        />
                    ),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy3');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy3');
            });
        });

        describe('right arrow', () => {
            it('should open nested options', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'ArrowRight', code: 39 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Some 1');
                expect(mockOnChange).toHaveBeenCalledWith('Some 1');
            });
        });

        describe('left arrow', () => {
            it('should close nested options', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'ArrowRight', code: 39 });
                fireEvent.keyDown(container, { key: 'ArrowLeft', code: 37 });
                expect(inputEl.value).toEqual('Dummy1');
                expect(container.querySelector('#Dummy2-options')).toBeNull();
            });
        });

        describe('enter key', () => {
            it('should close options and select the hovered option', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="all" options={options} onChange={mockOnChange} />),
                    inputEl = container.querySelector('#medly-singleSelect-input') as HTMLInputElement;
                fireEvent.click(inputEl);
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(inputEl.value).toEqual('Dummy1');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
            });
        });
    });
});
