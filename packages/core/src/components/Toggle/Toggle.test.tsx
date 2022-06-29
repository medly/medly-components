import { LockOpenIcon, LockOutlineIcon } from '@medly-components/icons';
import { fireEvent, render, screen } from '@test-utils';
import { Toggle } from './Toggle';

describe('Checkbox component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = render(<Toggle name="gender" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = render(
            <Toggle disabled fullWidth name="gender" label="Female" size="M" labelPosition="right" id="gender-toggle" />
        );
        expect(container).toMatchSnapshot();
    });

    it('should call onChange handler on click on checkbox', () => {
        const mockOnChange = jest.fn();
        render(<Toggle onChange={mockOnChange} disabled name="gender" label="Female" size="M" labelPosition="right" />);
        fireEvent.click(screen.getByRole('checkbox'));
        expect(mockOnChange).toBeCalled();
    });

    it('should show the toggle button icons when icons are passed', () => {
        const mockOnChange = jest.fn();
        render(
            <Toggle
                onChange={mockOnChange}
                disabled
                name="gender"
                label="Female"
                size="M"
                labelPosition="right"
                iconLeft={<LockOpenIcon data-testid="lock-open-icon" />}
                iconRight={<LockOutlineIcon data-testid="lock-close-icon" />}
            />
        );
        expect(screen.getByTestId('lock-open-icon')).toBeInTheDocument();
        expect(screen.getByTestId('lock-close-icon')).toBeInTheDocument();
    });
});
