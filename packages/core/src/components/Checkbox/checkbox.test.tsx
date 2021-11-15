import { fireEvent, render, screen } from '@test-utils';
import userEvent from '@testing-library/user-event';
import { LabelPositions } from '../Label/types';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
    const booleanOptions: boolean[] = [true, false],
        labelPositions: LabelPositions[] = ['left', 'right', 'top', 'bottom'],
        verticalLabelPositions: Partial<LabelPositions>[] = ['top', 'bottom'];

    describe.each(booleanOptions)('should render correctly with checked %p', checked => {
        test.each(['indeterminate', 'active', 'disabled', 'hasError'])('and %s state', state => {
            const { container } = render(<Checkbox {...{ [state]: true }} checked={checked} errorText="Something went wrong" />);
            expect(container).toMatchSnapshot();
        });
    });

    test.each(labelPositions)('should render correctly with %s labelPosition', labelPosition => {
        const { container } = render(<Checkbox label="Dummy" labelPosition={labelPosition} />);
        expect(container).toMatchSnapshot();
    });

    test.each(verticalLabelPositions)('should render properly with fullWidth and %p labelPosition', labelPosition => {
        const { container } = render(<Checkbox id="dummy" fullWidth label="Dummy" labelPosition={labelPosition} />);
        expect(container.querySelector('#dummy-wrapper')).toHaveStyle(`
            display: flex;
            padding: 0.8rem 0
        `);
    });

    it('should call onChange handler on click on checkbox', () => {
        const mockOnChange = jest.fn();
        render(<Checkbox onChange={mockOnChange} label="Dummy" />);
        userEvent.click(screen.getByRole('checkbox'));
        expect(mockOnChange).toBeCalled();
    });

    it('should show error text if provided', () => {
        const mockOnChange = jest.fn();
        render(<Checkbox onChange={mockOnChange} label="Dummy" errorText="Something went wrong" />);
        const errorText = screen.getByText('Something went wrong');
        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveStyle(`color: rgb(204, 0, 0)`);
    });

    it('should call validator function on blur event', () => {
        const mockOnBlur = jest.fn();
        render(
            <Checkbox
                required
                onBlur={mockOnBlur}
                label="Dummy"
                validator={val => (!val ? 'Please accept the terms & conditions to continue.' : '')}
            />
        );
        fireEvent.blur(screen.getByRole('checkbox'));
        expect(screen.getByText('Please accept the terms & conditions to continue.')).toBeInTheDocument();
        expect(mockOnBlur).toBeCalled();
    });

    it('should show the html5 error validation message on error', () => {
        const mockOnInvalid = jest.fn();
        render(<Checkbox required onInvalid={mockOnInvalid} label="Dummy" />);
        fireEvent.invalid(screen.getByRole('checkbox'));
        expect(screen.getByText('Constraints not satisfied')).toBeInTheDocument();
        expect(mockOnInvalid).toBeCalled();
    });
});
