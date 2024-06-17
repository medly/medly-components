import { cleanup, fireEvent, render, screen, waitFor } from '@test-utils';
import { placements } from '../Popover/Popover.stories';
import { DatePicker } from './DatePicker';
import { DatePickerProps } from './types';

describe('DatePicker component', () => {
    afterEach(cleanup);

    it('should render properly when value is null', () => {
        render(<DatePicker id="dob" disabled label="Start Date" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />);
        const inputEl = screen.getByRole('textbox') as HTMLInputElement;
        expect(inputEl).toHaveValue('');
    });

    it('should render properly when value is of date type', () => {
        const { container } = render(
                <DatePicker disabled label="Start Date" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            ),
            inputEl = screen.getByRole('textbox') as HTMLInputElement;
        expect(inputEl).toHaveValue('01 / 01 / 2020');
        expect(container).toMatchSnapshot();
    });

    it('should render properly when hideInput prop is passed', () => {
        const { container } = render(
            <DatePicker hideInput label="Start Date" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when value is of string type', () => {
        const { container } = render(
                <DatePicker
                    disabled
                    value="01/01/2020"
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    minSelectableDate={new Date(2010, 0, 1)}
                    maxSelectableDate={new Date(2030, 2, 1)}
                />
            ),
            inputEl = screen.getByRole('textbox') as HTMLInputElement;
        expect(inputEl).toHaveValue('01 / 01 / 2020');
        expect(container).toMatchSnapshot();
    });

    describe('popover placement', () => {
        test.each(placements)('should render properly with %p position', (popoverPlacement: DatePickerProps['popoverPlacement']) => {
            const { container } = render(
                <DatePicker
                    id="dob"
                    value={new Date(2020, 0, 1)}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    popoverPlacement={popoverPlacement}
                />
            );
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            expect(container.querySelector('#dob-calendar')).toBeVisible();
            expect(container.querySelector('#dob-calendar')).toMatchSnapshot();
        });
    });

    describe('calendar', () => {
        it('should show calendar on click on icon', () => {
            const { container } = render(
                <DatePicker id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            );
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            expect(container.querySelector('#dob-calendar')).toBeVisible();
        });

        it('should not show calendar on click on icon if is disabled prop is passes', () => {
            const { container } = render(
                <DatePicker disabled id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            );
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            expect(container.querySelector('#dob-calendar')).toBeNull();
        });

        it('should call onChange with expected date on selecting date from calendar', async () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2021, 1, 1);
            render(
                <DatePicker
                    id="dob"
                    value={new Date(2020, 11, 25)}
                    displayFormat="MM/dd/yyyy"
                    onChange={mockOnChange}
                    minSelectableDate={new Date(2020, 0, 1)}
                    maxSelectableDate={new Date(2022, 2, 1)}
                />
            );
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            fireEvent.click(screen.getByRole('button', { name: 'Dec' }));
            fireEvent.click(screen.getByText('Feb'));
            fireEvent.click(screen.getByRole('button', { name: '2020' }));
            fireEvent.click(screen.getByText('2021'));
            fireEvent.click(screen.getByTitle(dateToSelect.toDateString()));
            await waitFor(() => expect(mockOnChange).toBeCalledWith(dateToSelect));
        });

        it('should render error message if validator prop is given', async () => {
            render(
                <DatePicker
                    id="dob"
                    value={new Date(2020, 11, 25)}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    validator={() => 'Invalid date'}
                />
            );
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            fireEvent.click(screen.getByRole('button', { name: 'Dec' }));
            fireEvent.click(screen.getByText('Feb'));
            fireEvent.click(screen.getByRole('button', { name: '2020' }));
            fireEvent.click(screen.getByText('2021'));
            fireEvent.click(screen.getByTitle(new Date(2021, 1, 1).toDateString()));
            expect(await screen.findByText('Invalid date')).toBeInTheDocument();
        });

        it('should hide calendar on click outside of the component', async () => {
            const { container } = render(
                <>
                    <p>Click Here</p>
                    <DatePicker id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
                </>
            );
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            expect(container.querySelector('#dob-calendar')).toBeVisible();
            fireEvent.click(screen.getByText('Click Here'));
            expect(container.querySelector('#dob-calendar')).toBeNull();
        });

        it('should show error message on outer click if the datepicker is previously active', async () => {
            const mockOnBlur = jest.fn(),
                { container } = render(
                    <>
                        <p>Click Here</p>
                        <DatePicker id="dob" required value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} onBlur={mockOnBlur} />
                    </>
                );
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            expect(container.querySelector('#dob-calendar')).toBeVisible();
            fireEvent.click(screen.getByText('Click Here'));
            const message = await screen.findByText('Please fill in this field');
            expect(message).toBeInTheDocument();
            expect(mockOnBlur).toBeCalled();
        });

        it('should not show error message on outer click if the datepicker is was not previously active', async () => {
            render(
                <>
                    <p>Click Here</p>
                    <DatePicker id="dob" required value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
                </>
            );
            fireEvent.click(screen.getByText('Click Here'));
            expect(screen.queryByText('Please fill in this field')).not.toBeInTheDocument();
        });
    });

    describe('calendar icon', () => {
        it('should show calendar icon when showCalendarIcon prop is true', () => {
            const { container } = render(
                <DatePicker showCalendarIcon id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            );
            expect(container.querySelector('#dob-calendar-icon')).toBeVisible();
        });

        it('should not show calendar icon when showCalendarIcon prop is true', () => {
            const { container } = render(
                <DatePicker
                    showCalendarIcon={false}
                    id="dob"
                    value={new Date(2020, 0, 1)}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                />
            );
            expect(container.querySelector('#dob-calendar-icon')).toBeNull();
        });

        it('should show calendar icon displayed to the right', () => {
            const { container } = render(
                <DatePicker showCalendarIcon id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={jest.fn()} />
            );
            expect(container).toMatchSnapshot();
        });

        it('should show calendar icon displayed to the left', () => {
            const { container } = render(
                <DatePicker
                    showCalendarIcon
                    id="dob"
                    value={new Date(2020, 0, 1)}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    calendarIconPosition="left"
                />
            );
            expect(container).toMatchSnapshot();
        });
    });

    describe('on text change', () => {
        it('should change call onChange with expected date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 0, 2);
            render(<DatePicker id="dob" value={null} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />);
            fireEvent.change(screen.getByRole('textbox'), { target: { value: '01 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should render error if typed date is out of range', async () => {
            const mockOnChange = jest.fn();
            render(
                <DatePicker
                    id="dob"
                    value={null}
                    displayFormat="MM/dd/yyyy"
                    onChange={mockOnChange}
                    minSelectableDate={new Date(2021, 0, 2)}
                />
            );
            const inputEl = screen.getByRole('textbox');
            fireEvent.change(screen.getByRole('textbox'), { target: { value: '01 / 02 / 2020' } });
            fireEvent.blur(inputEl);
            const message = await screen.findByText('Please select date from allowed range');
            expect(message).toBeInTheDocument();
        });

        it('should call onChange with null if typed date is invalid', async () => {
            const mockOnChange = jest.fn();
            render(<DatePicker id="dob" value={null} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />);
            fireEvent.change(screen.getByRole('textbox'), { target: { value: '01 / 02' } });
            expect(mockOnChange).toHaveBeenCalledWith(null);
        });

        it('should call onChange with null if we delete char from the middle', async () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 0, 2);
            render(<DatePicker id="dob" value={null} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />);
            fireEvent.change(screen.getByRole('textbox'), { target: { value: '01 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
            fireEvent.change(screen.getByRole('textbox'), { target: { value: '01 / 0 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(null);
        });
    });

    describe('error messages', () => {
        const props: DatePickerProps = {
            value: null,
            displayFormat: 'MM/dd/yyyy',
            onChange: jest.fn()
        };
        const renderComponent = (required = false, validator?: (val: Date | null) => string) => {
            const { findByText } = render(<DatePicker id="dob" {...props} required={required} validator={validator} />);
            const inputEl = screen.getByRole('textbox');
            return {
                inputEl,
                findByText
            };
        };

        it('should return error when value is empty and field is required', async () => {
            const { inputEl } = renderComponent(true);
            fireEvent.invalid(inputEl);
            expect(await screen.findByText('Please fill in this field')).toBeInTheDocument();
        });

        it('should return error message if date entered is incomplete', async () => {
            const { inputEl } = renderComponent();
            fireEvent.change(inputEl, { target: { value: '04/31' } });
            fireEvent.blur(inputEl);
            expect(await screen.findByText('Please enter a valid date')).toBeInTheDocument();
        });

        it('should return validator error message if given', async () => {
            const validator = (val: Date | null) => (!val ? 'Please enter dob' : '');
            const { inputEl } = renderComponent(true, validator);
            fireEvent.invalid(inputEl);
            expect(await screen.findByText('Please enter dob')).toBeInTheDocument();
        });
    });

    describe('Handlers', () => {
        it('should call onChange on selecting date', async () => {
            const mockOnChange = jest.fn(),
                dateToSelect = new Date(2020, 0, 2);
            render(<DatePicker id="dob" value={new Date(2020, 0, 1)} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />);
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            fireEvent.click(screen.getByTitle(dateToSelect.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should call focus and blur handlers if passed', () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { container } = render(
                    <DatePicker
                        id="dob"
                        value={new Date(2020, 0, 1)}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange}
                        onFocus={mockOnFocus}
                        onBlur={mockOnBlur}
                    />
                ),
                inputEl = container.querySelector('#dob-input') as HTMLInputElement;
            fireEvent.focus(inputEl);
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputEl);
            expect(mockOnBlur).toHaveBeenCalled();
        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { container } = render(
                    <DatePicker
                        id="dob"
                        value={new Date(2020, 0, 1)}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange}
                        onInvalid={mockOnInvalid}
                    />
                ),
                inputEl = container.querySelector('#dob-input') as HTMLInputElement;
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            fireEvent.invalid(inputEl);
            expect(mockOnInvalid).toHaveBeenCalled();
        });
    });

    describe('Styles', () => {
        it('should change the margin and width if full-width is passed as prop', () => {
            const { container } = render(
                <DatePicker id="dob" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} fullWidth={true} />
            );
            expect(container.querySelector('#dob-datepicker-wrapper')).toHaveStyle(`width: 100%`);
        });

        it('should change the size of datepicker based on size prop', () => {
            const { container } = render(<DatePicker id="dob" value={null} displayFormat="MM/dd/yyyy" onChange={jest.fn()} size={'S'} />);
            fireEvent.click(screen.getByTitle('dob-calendar-icon'));
            expect(container.querySelector('#dob-calendar')).toHaveStyle(`top: 4rem`);
        });
    });
});
