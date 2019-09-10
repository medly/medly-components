import { TestUtils } from '@medly-components/utils';
import React from 'react';
import SingleSelect from './SingleSelect';

const { act, render, fireEvent, cleanup } = TestUtils;
afterEach(cleanup);

describe('SingleSelect component', () => {
    const options = [{ value: 'all', label: 'All' }, { value: 'Dummy1', label: 'Dummy1' }, { value: 'Dummy2', label: 'Dummy2' }];

    it('should render correctly with default props', () => {
        const { container } = render(<SingleSelect options={options} />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const mockOnChange = jest.fn();
        const { container } = render(
            <SingleSelect
                disabled
                options={options}
                defaultValue="all"
                labelPosition="left"
                fullWidth
                required
                label="Pharmacy"
                description="We will show reports based on Pharmacy"
                placeholder="Please Select"
                onChange={mockOnChange}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render options correctly', () => {
        const { container, getByTestId } = render(<SingleSelect options={options} />);
        expect(container).toMatchSnapshot();
        const inputEl = getByTestId('select-input');
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
        const inputEl = getByTestId('select-input');
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
        const inputEl = getByTestId('select-input');
        act(() => {
            fireEvent.click(inputEl);
        });
        const option = getByText('Dummy1');
        act(() => {
            fireEvent.click(option);
        });
        // @ts-ignore
        expect(inputEl.value).toEqual('Dummy1');
        expect(mockOnChange).toHaveBeenCalledWith('Dummy1');
    });

    it('should not call onChange if user click on the already selected option', () => {
        const mockOnChange = jest.fn();
        const { getByTestId, getByText } = render(<SingleSelect defaultValue="Dummy1" options={options} onChange={mockOnChange} />);
        const inputEl = getByTestId('select-input');
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
        const inputEl = getByTestId('select-input');
        act(() => {
            fireEvent.click(inputEl);
            fireEvent.change(inputEl, { target: { value: 'Dummy' } });
        });
        expect(container).toMatchSnapshot();
    });

    it('should render all the options when input value is not matched to any option', async () => {
        const { container, getByTestId } = render(<SingleSelect options={options} />);
        const inputEl = getByTestId('select-input');
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
        const inputEl = getByTestId('select-input');
        const outer = getByText('Outer');
        act(() => {
            fireEvent.click(inputEl);
            fireEvent.click(outer);
        });
        expect(container).toMatchSnapshot();
    });
});
