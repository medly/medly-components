import { cleanup, fireEvent, render, screen } from '@test-utils';
import { Chip } from './Chip';

describe('Chip component', () => {
    afterEach(cleanup);

    it('should render properly with flat variant', () => {
        const { container } = render(<Chip variant="flat" color="yellow" label="Flat Chip" />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with outlined variant', () => {
        const { container } = render(<Chip variant="outlined" color="secondary" label="Outlined Chip" />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with solid variant', () => {
        const { container } = render(<Chip variant="solid" label="Solid Chip" />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is disabled', () => {
        const { container } = render(<Chip disabled variant="solid" label="Solid Chip" />);
        expect(container).toMatchSnapshot();
    });

    test.each([true, false])('should handle on click when chip is disabled: %p', (disabled: boolean) => {
        const mockOnClick = jest.fn();

        const { getByText } = render(<Chip disabled={disabled} variant="flat" color="yellow" onClick={mockOnClick} label="Flat Chip" />);
        fireEvent.click(getByText('Flat Chip'));
        expect(mockOnClick).toHaveBeenCalledTimes(disabled ? 0 : 1);
    });

    test.each([true, false])('should handle on delete when chip is disabled: %p', (disabled: boolean) => {
        const mockOnClick = jest.fn(),
            mockOnDelete = jest.fn();

        render(<Chip disabled={disabled} variant="flat" onClick={mockOnClick} onDelete={mockOnDelete} color="yellow" label="Dummy" />);
        fireEvent.click(screen.getByTitle('Dummy chip clear icon'));
        expect(mockOnDelete).toHaveBeenCalledTimes(disabled ? 0 : 1);
        expect(mockOnClick).not.toBeCalled();
    });
});
