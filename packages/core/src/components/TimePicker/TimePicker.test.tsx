import { fireEvent, render, screen, waitFor } from '@test-utils';
import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
    beforeAll(() => {
        // @ts-ignore
        Element.prototype.scrollTo = function ({ top }) {
            this.scrollTop = top;
        };
    });

    it('should render properly', () => {
        const { container } = render(<TimePicker label="Time" value="13:11" onChange={jest.fn()} />);
        fireEvent.click(screen.getByLabelText('Time'));
        expect(container).toMatchSnapshot();
    });

    it('should give time entered in the textfield', () => {
        const mockOnChange = jest.fn();
        render(<TimePicker label="Time" value="13:11" onChange={mockOnChange} />);
        fireEvent.change(screen.getByLabelText('Time'), { target: { value: '10 : 00 PM' } });
        fireEvent.blur(screen.getByLabelText('Time'));
        expect(mockOnChange).toBeCalledWith('22:00');
    });

    it('should select AM as default', async () => {
        const mockOnChange = jest.fn();
        render(<TimePicker label="Time" value="13:11" onChange={mockOnChange} />);
        fireEvent.change(screen.getByLabelText('Time'), { target: { value: '10 : 00' } });
        fireEvent.blur(screen.getByLabelText('Time'));
        expect(mockOnChange).toBeCalledWith('10:00');
    });

    it('should give the expected time on scrolling through list in the dialog', async () => {
        const mockOnChange = jest.fn();
        render(<TimePicker label="Time" value="" onChange={mockOnChange} />);
        fireEvent.click(screen.getByLabelText('Time'));
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 640 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 11 * 40 });
        fireEvent.scroll(screen.getByRole('list', { name: 'HOUR list' }));
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 2560 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 11 * 40 });
        fireEvent.scroll(screen.getByRole('list', { name: 'MINUTES list' }));
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 240 });
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 1 * 40 });
        fireEvent.scroll(screen.getByRole('list', { name: 'PERIOD list' }));
        fireEvent.click(screen.getByText('Apply'));
        await waitFor(() => expect(mockOnChange).toBeCalledWith('12:11'));
    });

    describe('error messages', () => {
        it('should render error message if required', async () => {
            Object.defineProperty(HTMLElement.prototype, 'scrollTo', { configurable: true, value: jest.fn() });
            render(<TimePicker required label="Time" value="" onChange={jest.fn()} />);
            fireEvent.blur(screen.getByLabelText('Time'));
            expect(await screen.findByText('Constraints not satisfied')).toBeInTheDocument();
        });

        it('should render error message returned from validator', async () => {
            Object.defineProperty(HTMLElement.prototype, 'scrollTo', { configurable: true, value: jest.fn() });
            const validator = (val: string) => (!val ? 'Please enter time' : '');
            render(<TimePicker required label="Time" value="" onChange={jest.fn()} validator={validator} />);
            fireEvent.blur(screen.getByLabelText('Time'));
            expect(await screen.findByText('Please enter time')).toBeInTheDocument();
        });

        it('should render error message if time is out of range', async () => {
            Object.defineProperty(HTMLElement.prototype, 'scrollTo', { configurable: true, value: jest.fn() });
            render(<TimePicker label="Time" value="" onChange={jest.fn()} />);
            fireEvent.change(screen.getByLabelText('Time'), { target: { value: '78 : 78 AM' } });
            fireEvent.blur(screen.getByLabelText('Time'));
            expect(await screen.findByText('Time must be within the valid range of 12:00 AM to 11:59 PM')).toBeInTheDocument();
        });
    });
});
