import { fireEvent, render, screen, waitFor } from '@test-utils';
import userEvent from '@testing-library/user-event';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupProps } from './types';

const renderer = ({
    label = 'Cars',
    helperText = 'Helper Text',
    errorText = '',
    onChange = jest.fn(),
    required = false,
    disabled = false,
    showSelectAll = false,
    onBlur = jest.fn(),
    values = ['hyundai'],
    validator,
    options = [
        { value: 'honda', label: 'Honda' },
        { value: 'hyundai', label: 'Hyundai' },
        {
            value: [
                { value: 'jaguar', label: 'Jaguar' },
                { value: 'landRover', label: 'Land Rover' }
            ],
            columns: 2,
            label: 'Tata'
        }
    ]
}: Partial<CheckboxGroupProps>) =>
    render(
        <CheckboxGroup
            {...{ values, required, showSelectAll, validator, onBlur, disabled, label, helperText, options, errorText, onChange }}
        />
    );

describe('CheckboxGroup component', () => {
    it('should render properly', () => {
        const { container } = renderer({});
        expect(container).toMatchSnapshot();
    });

    it('should render properly with disabled state', () => {
        const { container } = renderer({ disabled: true });
        expect(container).toMatchSnapshot();
    });

    it('should render properly with fullWidth', () => {
        const { container } = renderer({ disabled: true });
        expect(container).toMatchSnapshot();
    });

    it('should deselect option when it is already selected', () => {
        const mockOnChange = jest.fn();
        renderer({ onChange: mockOnChange });
        userEvent.click(screen.getByText('Hyundai'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should select option when click on it', () => {
        const mockOnChange = jest.fn();
        renderer({ onChange: mockOnChange, values: [] });
        userEvent.click(screen.getByText('Hyundai'));
        expect(mockOnChange).toHaveBeenCalledWith(['hyundai']);
    });

    it('should select all when clicked on the select all option', () => {
        const mockOnChange = jest.fn();
        renderer({ onChange: mockOnChange, showSelectAll: true });
        userEvent.click(screen.getByText('Cars'));
        expect(mockOnChange).toHaveBeenCalledWith(['hyundai', 'honda', 'jaguar', 'landRover']);
    });

    it('should show indeterminate state when any one option is selected but not all', () => {
        const mockOnChange = jest.fn(),
            { container } = renderer({ onChange: mockOnChange });
        expect(container.querySelector('svg')).toMatchSnapshot();
    });

    it('should unselect all when all the options are already selected', () => {
        const mockOnChange = jest.fn();
        renderer({ onChange: mockOnChange, values: ['honda', 'hyundai', 'jaguar', 'landRover'], showSelectAll: true });
        userEvent.click(screen.getByText('Cars'));
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should render error text when it is given', () => {
        renderer({ errorText: 'Something went wrong' });
        const errorText = screen.getByText('Something went wrong');
        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveStyle(`color: rgb(204, 0, 0)`);
    });

    it('should call validator function on blur', async () => {
        const mockOnBlur = jest.fn();
        const { container } = renderer({
            values: [],
            onBlur: mockOnBlur,
            validator: (val: string[]) => (val.length === 0 ? 'Please select at least one car' : '')
        });
        fireEvent.blur(container.querySelector('#Cars-wrapper') as HTMLDivElement);
        await waitFor(() => expect(screen.getByText('Please select at least one car')).toBeInTheDocument());
        expect(mockOnBlur).toBeCalled();
    });

    it('should show default error message on blur when we pass required prop', async () => {
        const mockOnBlur = jest.fn();
        const { container } = renderer({
            required: true,
            values: [],
            onBlur: mockOnBlur
        });
        fireEvent.blur(container.querySelector('#Cars-wrapper') as HTMLDivElement);
        await waitFor(() => expect(screen.getByText('Please select at least one option.')).toBeInTheDocument());
        expect(mockOnBlur).toBeCalled();
    });

    describe('nested options', () => {
        it('should select option when click on it', () => {
            const mockOnChange = jest.fn();
            renderer({ onChange: mockOnChange, values: [] });
            userEvent.click(screen.getByText('Jaguar'));
            expect(mockOnChange).toHaveBeenCalledWith(['jaguar']);
        });

        it('should select all nested options when clicked on the group label', () => {
            const mockOnChange = jest.fn();
            renderer({ onChange: mockOnChange, values: [] });
            userEvent.click(screen.getByText('Tata'));
            expect(mockOnChange).toHaveBeenCalledWith(['jaguar', 'landRover']);
        });

        it('should unselect all when all the options are already selected', () => {
            const mockOnChange = jest.fn();
            renderer({ onChange: mockOnChange, values: ['jaguar', 'landRover'] });
            userEvent.click(screen.getByText('Tata'));
            expect(mockOnChange).toHaveBeenCalledWith([]);
        });
    });
});
