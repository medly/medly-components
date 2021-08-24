import { cleanup, fireEvent, render, screen, waitFor } from '@test-utils';
import React, { useState } from 'react';
import Text from '../Text';
import { SingleSelect } from './SingleSelect';
import { SelectProps } from './types';

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

const DummyComponent = (props: Omit<SelectProps, 'options'>) => {
    const [opts, setOptions] = useState(options),
        updateOpts = () => setOptions([{ value: 'all', label: 'All' }]);
    return (
        <>
            <SingleSelect options={opts} {...props} />
            <button onClick={updateOpts}>Update Options</button>
        </>
    );
};

describe('SingleSelect component', () => {
    afterEach(cleanup);

    describe.each(['outlined', 'filled', 'flat'])('with %s variant', (variant: SelectProps['variant']) => {
        it('should render properly', () => {
            const { container } = render(<SingleSelect options={options} variant={variant} value="Dummy1" fullWidth />);
            expect(container).toMatchSnapshot();
        });

        it('should render with label properly', () => {
            const { container } = render(
                <SingleSelect label="Label" helperText="Helper Text" options={options} variant={variant} value="Dummy1" />
            );
            expect(container).toMatchSnapshot();
        });

        it('should render properly when option is custom component', async () => {
            const { container, queryByText } = render(
                <SingleSelect
                    label="Label"
                    helperText="Helper Text"
                    options={[...options, { value: <Text>Component</Text>, label: 'Custom component' }]}
                    variant={variant}
                    value="Dummy1"
                />
            );
            fireEvent.click(container.querySelector('svg'));
            await waitFor(() => expect(screen.getByRole('list')).toBeVisible());
            expect(container).toMatchSnapshot();
            expect(queryByText('Component')).toBeInTheDocument();
        });

        it('should render disabled state properly ', () => {
            const { container } = render(
                <SingleSelect disabled helperText="Helper Text" options={options} variant={variant} value="Dummy1" />
            );
            expect(container).toMatchSnapshot();
        });

        it('should render helper text properly', () => {
            const { getByText } = render(<SingleSelect helperText="Helper Text" options={options} variant={variant} value="Dummy1" />);
            expect(getByText('Helper Text')).toBeInTheDocument();
        });

        it('should render error text properly', async () => {
            const { container, getByText } = render(
                <SingleSelect errorText="Something went wrong" options={options} variant={variant} value="Dummy1" />
            );
            fireEvent.click(getByText('Something went wrong'));
            fireEvent.click(container.querySelector('svg'));
            await waitFor(() => expect(screen.getByRole('list')).toBeVisible());
            expect(getByText('Something went wrong')).toHaveStyle(`color: rgb(204, 0, 0)`);
        });

        it('should render options correctly on click on the input', () => {
            render(<SingleSelect options={options} variant={variant} />);
            const role = variant === 'flat' ? 'button' : 'textbox';
            fireEvent.click(screen.getByRole(role));
            expect(screen.getByRole('list')).toMatchSnapshot();
        });
    });

    test.each(['S', 'M'])('should render properly with %s size', async (size: 'S' | 'M') => {
        const { container } = render(<SingleSelect options={options} variant="filled" value="Dummy1" size={size} />);
        fireEvent.click(container.querySelector('svg'));
        await waitFor(() => expect(screen.getByRole('list')).toBeVisible());
        expect(screen.getByRole('list')).toHaveStyle(`
            top: ${size === 'S' ? '4rem' : '5.6rem'}
        `);
        expect(screen.getAllByRole('listitem')[0]).toMatchSnapshot();
    });

    it('should update value on updating options', async () => {
        const mockOnChange = jest.fn();
        render(<DummyComponent value="Dummy1" onChange={mockOnChange} />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockOnChange).toBeCalled();
    });

    it('should not change input on pressing any key if isSearchable key is falsy', async () => {
        render(<SingleSelect value="Dummy1" options={options} />);
        const input = screen.getByRole('textbox');

        fireEvent.focus(input);
        fireEvent.keyPress(input, { key: 'a', code: 65, charCode: 65 });
        expect(input).toHaveValue('Dummy1');
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

    it('should take passed max width', () => {
        const { container } = render(<SingleSelect options={options} value="dummy" maxWidth="30rem" />);
        fireEvent.click(container.querySelector('svg'));
        waitFor(() => expect(screen.getByRole('list')).toBeVisible());
        expect(container).toMatchSnapshot();
    });

    it('should show options on click on drop icon', async () => {
        const { container } = render(<SingleSelect options={options} />);
        fireEvent.click(container.querySelector('svg'));
        waitFor(() => expect(screen.getByRole('list')).toBeVisible());
    });

    it('should show options on click on drop icon when options are custom components', async () => {
        const componentAsOptions = [
            { value: <>Component1</>, label: 'Component1' },
            { value: <>Component2</>, label: 'Component2' }
        ];
        const { container } = render(<SingleSelect options={componentAsOptions} />);
        fireEvent.click(container.querySelector('svg'));
        waitFor(() => expect(screen.getByRole('list')).toBeVisible());
        waitFor(() => expect(container).toHaveTextContent('Component1'));
        waitFor(() => expect(container).toHaveTextContent('Component2'));
    });

    it('should not show options on click on drop icon, if disabled prop is set true', () => {
        const { container } = render(<SingleSelect options={options} disabled />);
        fireEvent.click(container.querySelector('svg'));
        expect(screen.queryByRole('list')).toBeNull();
    });

    it('should hide options on click on drop icon, if options are already visible', () => {
        const { container } = render(<SingleSelect options={options} />);
        fireEvent.click(container.querySelector('svg'));
        fireEvent.click(container.querySelector('svg'));
        expect(screen.queryByRole('list')).toBeNull();
    });

    it('should hide options on click outside of the container', () => {
        const { container } = render(
            <div>
                <p id="sibling">Outer Element</p>
                <SingleSelect options={options} />
            </div>
        );
        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(container.querySelector('#sibling'));
        expect(screen.queryByRole('list')).toBeNull();
    });

    it('should not show options on click outside of the container', () => {
        const { container } = render(
            <div>
                <p id="sibling">Outer Element</p>
                <SingleSelect options={options} />
            </div>
        );
        fireEvent.click(container.querySelector('#sibling'));
        expect(screen.queryByRole('list')).toBeNull();
    });

    it('should show the selected option label in input on click on the option', () => {
        const mockOnChange = jest.fn();
        render(<SingleSelect options={options} onChange={mockOnChange} />);

        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Dummy1'));
        expect(screen.getByRole('textbox')).toHaveValue('Dummy1');
        expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
    });

    it('should call onChange with input value if input value matches any option label', () => {
        const mockOnChange = jest.fn();
        render(<SingleSelect options={options} onChange={mockOnChange} />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Dummy1' } });
        expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
    });

    it('should not call onChange with input value when options are visible even if input value matches any option label ', async () => {
        const mockOnChange = jest.fn();
        render(<SingleSelect options={options} onChange={mockOnChange} />);

        fireEvent.click(screen.getByRole('textbox'));
        await waitFor(() => expect(screen.getByRole('list')).toBeVisible());
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Dummy1' } });
        expect(mockOnChange).not.toHaveBeenCalledWith('Dummy1');
    });

    it('should show the nested options on click on the option with nested option', () => {
        const mockOnChange = jest.fn(),
            { container } = render(<SingleSelect options={options} onChange={mockOnChange} includesNestedOptions />);

        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('Dummy2'));
        expect(container.querySelector('#Dummy2-options')).toBeInTheDocument();
    });

    it('should not select option on click on the disable option', () => {
        const mockOnChange = jest.fn(),
            { getByText } = render(
                <SingleSelect
                    value="Dummy1"
                    options={[...options, { value: 'Dummy4', label: 'Dummy4', disabled: true }]}
                    onChange={mockOnChange}
                />
            );
        const inputEl = screen.getByRole('textbox');
        fireEvent.click(inputEl);
        fireEvent.click(getByText('Dummy4'));
        expect(inputEl).toHaveValue('Dummy1');
        expect(mockOnChange).not.toBeCalled();
    });

    it('should render matched options when input values changes', async () => {
        render(<SingleSelect options={options} />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Dummy' } });
        expect(screen.queryByText('All')).toBeNull();
        expect(screen.getByRole('list')).toBeVisible();
    });

    it('should render all the options when input value is not matched to any option', async () => {
        render(<SingleSelect options={options} />);
        const inputEl = screen.getByRole('textbox');
        fireEvent.click(inputEl);
        fireEvent.change(inputEl, { target: { value: 'Hello' } });
        expect(screen.getByText('All')).toBeVisible();
        expect(screen.getByText('Dummy1')).toBeVisible();
        expect(screen.getByText('Dummy2')).toBeVisible();
    });

    it('should call onFocus function on focusing on input', async () => {
        const mockOnFocus = jest.fn();
        render(<SingleSelect value="Dummy1" options={options} onFocus={mockOnFocus} />);
        fireEvent.focus(screen.getByRole('textbox'));
        expect(mockOnFocus).toHaveBeenCalled();
    });

    it('should call onBlur function on moving focus out of input', async () => {
        const mockOnBlur = jest.fn();
        render(<SingleSelect value="Dummy1" options={options} onBlur={mockOnBlur} />);
        const inputEl = screen.getByRole('textbox');
        fireEvent.click(inputEl);
        fireEvent.blur(inputEl);
        await waitFor(() => expect(mockOnBlur).toHaveBeenCalled());
        await waitFor(() => expect(screen.queryByRole('list')).toBeNull(), { timeout: 251 });
    });

    it('should handle builtin form validation', () => {
        const { container } = render(<SingleSelect options={options} />);
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
                const { container } = render(<SingleSelect value="Dummy1" options={options} />);
                fireEvent.focus(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                expect(screen.getByRole('list')).toBeVisible();
            });

            it('should change input', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="all" options={options} onChange={mockOnChange} />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                await waitFor(() => expect(mockOnChange).toHaveBeenCalledWith('Dummy1'));
                await waitFor(() => expect(screen.getByRole('textbox')).toHaveValue('Dummy1'));
            });

            it('should change input value to the first option when currently selected options is the last option ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy3" options={options} onChange={mockOnChange} />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('All');
                expect(mockOnChange).toHaveBeenCalledWith('all');
            });

            it('should change input value to the first option when there is no option selected ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect options={options} onChange={mockOnChange} />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('All');
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
                    );
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('All');
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
                    );
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy6');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy6');
            });
        });

        describe('up arrow', () => {
            it('should show options if input is in focus and options are not visible', async () => {
                const { container } = render(<SingleSelect value="Dummy1" options={options} />);
                fireEvent.focus(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                expect(screen.getByRole('list')).toBeVisible();
            });

            it('should change input value', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Some 1" options={options} onChange={mockOnChange} />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy1');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
            });

            it('should change input value to the last option when currently selected option is the first option', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="all" options={options} onChange={mockOnChange} />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy3');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy3');
            });

            it('should change input value to the last option when there is no option selected ', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect options={options} onChange={mockOnChange} />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 38 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy3');
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
                    );
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy3');
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
                    );
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowUp', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy3');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy3');
            });
        });

        describe('right arrow', () => {
            it('should open nested options', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} includesNestedOptions />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'ArrowRight', code: 39 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Some 1');
                expect(mockOnChange).toHaveBeenCalledWith('Some 1');
            });
        });

        describe('left arrow', () => {
            it('should close nested options', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="Dummy1" options={options} onChange={mockOnChange} includesNestedOptions />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'ArrowRight', code: 39 });
                fireEvent.keyDown(container, { key: 'ArrowLeft', code: 37 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy1');
                expect(container.querySelector('#Dummy2-options')).toBeNull();
            });
        });

        describe('enter key', () => {
            it('should close options and select the hovered option', async () => {
                const mockOnChange = jest.fn(),
                    { container } = render(<SingleSelect value="all" options={options} onChange={mockOnChange} />);
                fireEvent.click(screen.getByRole('textbox'));
                fireEvent.keyDown(container, { key: 'ArrowDown', code: 40 });
                fireEvent.keyDown(container, { key: 'Enter', code: 13 });
                expect(screen.getByRole('textbox')).toHaveValue('Dummy1');
                expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
            });
        });
    });
});
