import { cleanup, fireEvent, render, waitFor } from '@test-utils';
import React from 'react';
import { placements } from '../Popover/Popover.stories';
import { DateRangePicker } from './DateRangePicker';
import { DateRangeProps } from './types';

describe('DateRangePicker', () => {
    afterEach(cleanup);
    it('should render properly when value is of date type', () => {
        const { container } = render(
            <DateRangePicker
                value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                onChange={jest.fn()}
                id="contract"
                displayFormat='MM/dd/yyyy'
                required={false}
                fromLabel="From"
                toLabel="To"
                size='M'
                popoverPlacement='bottom-start'
                variant='filled'
                fullWidth={false}
                disabled={false}
                minSelectableDate={new Date(2020, 1, 1)}
                maxSelectableDate={new Date(2022, 2, 15)}
            />
        );
        expect(container).toMatchSnapshot();
    });

    describe('popover placement', () => {
        test.each(placements)('should render properly with %p position', (popoverPlacement: DateRangeProps['popoverPlacement']) => {
            const { container } = render(
                <DateRangePicker
                    id="contract"
                    value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    popoverPlacement={popoverPlacement}
                    required={false}
                    fromLabel="From"
                    toLabel="To"
                    size='M'
                    variant='filled'
                    fullWidth={false}
                    disabled={false}
                />
            );
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            expect(container.querySelector('#contract-calendar')).toMatchSnapshot();
        });
    });

    describe('calendar', () => {
        it('should show calendar on click on icon', () => {
            const { container } = render(
                <DateRangePicker
                    id="contract"
                    value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    popoverPlacement='bottom-start'
                    required={false}
                    fromLabel="From"
                    toLabel="To"
                    size='M'
                    variant='filled'
                    fullWidth={false}
                    disabled={false}
                />
            );
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
        });
        it('should not show calendar on click on icon if is disabled prop is passes', () => {
            const { container } = render(
                <DateRangePicker
                    disabled
                    id="contract"
                    value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()} />
            );
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeNull();
        });

        it('should hide calendar on click outside of the component', async () => {
            const { container, getByText } = render(
                <>
                    <p>Click Here</p>
                    <DateRangePicker
                        id="contract"
                        value={{ startDate: new Date(2010, 0, 1), endDate: new Date(2010, 0, 2) }}
                        displayFormat="MM/dd/yyyy"
                        onChange={jest.fn()} />
                </>
            );
            fireEvent.click(container.querySelector('svg'));
            expect(container.querySelector('#contract-calendar')).toBeVisible();
            fireEvent.click(getByText('Click Here'));
            expect(container.querySelector('#contract-calendar')).toBeNull();
        });
    });
    describe('on text change', () => {
        it('should change call onChange of from date with expected date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { "endDate": new Date("2020-02-01T18:30:00.000Z"), "startDate": new Date("2020-03-01T18:30:00.000Z") },
                { container } = render(<DateRangePicker
                    id="contract"
                    value={{ startDate: new Date('01, 02, 2020'), endDate: new Date('02, 02, 2020') }}
                    displayFormat="MM/dd/yyyy"
                    onChange={mockOnChange} />);
            fireEvent.change(container.querySelector('#contract-from-input'), { target: { value: '03 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });
        it('should change call onChange of to date with expected date', () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { "endDate": new Date("2020-03-01T18:30:00.000Z"), "startDate": new Date("2020-01-01T18:30:00.000Z") },
                { container } = render(<DateRangePicker
                    id="contract"
                    value={{ startDate: new Date('01, 02, 2020'), endDate: new Date('02, 02, 2020') }}
                    displayFormat="MM/dd/yyyy"
                    onChange={mockOnChange} />);
            fireEvent.change(container.querySelector('#contract-to-input'), { target: { value: '03 / 02 / 2020' } });
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });
        it('should call onChange with null if typed from date is invalid', async () => {
            const mockOnChange = jest.fn(),
                { container } = render(<DateRangePicker id="contract" value={{ startDate: null, endDate: null }} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />);
            fireEvent.change(container.querySelector('#contract-from-input'), { target: { value: '01 / 02' } });
            expect(mockOnChange).toHaveBeenCalledTimes(0);
        });
        it('should call onChange with null if typed to date is invalid', async () => {
            const mockOnChange = jest.fn(),
                { container } = render(<DateRangePicker id="contract" value={{ startDate: null, endDate: null }} displayFormat="MM/dd/yyyy" onChange={mockOnChange} />);
            fireEvent.change(container.querySelector('#contract-to-input'), { target: { value: '01 / 02' } });
            expect(mockOnChange).toHaveBeenCalledTimes(0);
        });
    });
    describe('error messages', () => {
        const props: DateRangeProps = {
            value: { startDate: null, endDate: null },
            displayFormat: 'MM/dd/yyyy',
            onChange: jest.fn()
        };
        const renderComponent = (required = false, id: string) => {
            const { container, getByText } = render(<DateRangePicker id="contract" {...props} required={required} />);
            const inputEl = container.querySelector(`#contract-${id}-input`);
            return {
                inputEl,
                getByText
            };
        };

        it('should return error message if from date entered is incomplete', async () => {
            const { inputEl, getByText } = renderComponent(true, 'from');
            fireEvent.change(inputEl, { target: { value: '04/31' } });
            fireEvent.blur(inputEl);
            await waitFor(() => expect(getByText('Enter valid date')).toBeInTheDocument());
        });

        it('should return error message if to date entered is incomplete', async () => {
            const { inputEl, getByText } = renderComponent(true, 'to');
            fireEvent.change(inputEl, { target: { value: '04/31' } });
            fireEvent.blur(inputEl);
            await waitFor(() => expect(getByText('Enter valid date')).toBeInTheDocument());
        });
    });
    describe('Handlers', () => {
        it('should call onChange on selecting date', async () => {
            const mockOnChange = jest.fn(),
                dateToSelect = { startDate: new Date(2020, 0, 2) },
                { container, getByTitle } = render(
                    <DateRangePicker
                        id="contract"
                        value={{ startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) }}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange} />
                );
            fireEvent.click(container.querySelector('svg'));
            fireEvent.click(getByTitle(dateToSelect.startDate.toDateString()));
            expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
        });

        it('should call focus and blur handlers if passed', () => {
            const mockOnFocus = jest.fn(),
                mockOnChange = jest.fn(),
                mockOnBlur = jest.fn(),
                { container } = render(
                    <DateRangePicker
                        id="contract"
                        value={{ startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) }}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange}
                        onFocus={mockOnFocus}
                        onBlur={mockOnBlur}
                    />
                ),
                inputEl = container.querySelector('#contract-from-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            expect(mockOnFocus).toHaveBeenCalled();
            fireEvent.blur(inputEl);
            expect(mockOnBlur).toHaveBeenCalled();
        });

        it('should call invalid handler if passed', () => {
            const mockOnInvalid = jest.fn(),
                mockOnChange = jest.fn(),
                { container } = render(
                    <DateRangePicker
                        id="contract"
                        value={{ startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 1) }}
                        displayFormat="MM/dd/yyyy"
                        onChange={mockOnChange}
                        onInvalid={mockOnInvalid}
                    />
                ),
                inputEl = container.querySelector('#contract-from-input') as HTMLInputElement;
            fireEvent.click(container.querySelector('svg'));
            fireEvent.invalid(inputEl);
            expect(mockOnInvalid).toHaveBeenCalled();
        });
    });
    describe('Styles', () => {
        it('should change the margin and width if full-width is passed as prop', () => {
            const { container } = render(
                <DateRangePicker id="contract"
                    value={{ startDate: null, endDate: null }}
                    displayFormat="MM/dd/yyyy"
                    onChange={jest.fn()}
                    fullWidth={true} />
            );
            expect(container.querySelector('#contract-wrapper')).toHaveStyle(`width: 100%`);
        });

        /* it('should change the size of DateRangePicker based on size prop', async () => {
            const { container } = render(<DateRangePicker
                id="contract"
                value={{ startDate: null, endDate: null }}
                displayFormat="MM/dd/yyyy"
                size={'S'}
                onChange={jest.fn()} />);
            fireEvent.click(container.querySelector('svg'));
            await waitFor(() => expect(container.querySelector('#contract-calendar')).toHaveStyle(`top: 4rem`));
        }); */
    });
});
