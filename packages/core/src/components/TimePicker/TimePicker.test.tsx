import { fireEvent, render, screen } from '@test-utils';
import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
    beforeAll(() => {
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: 24 });
        // @ts-ignore
        Element.prototype.scrollTo = function ({ top }) {
            this.scrollTop = top;
        };
    });

    afterEach(() => {
        Object.defineProperty(global?.navigator, 'userAgent', { configurable: true, value: { indexOf: () => -1 } });
    });

    it('should render properly', () => {
        const { container } = render(<TimePicker label="Time" value="13:11" onChange={jest.fn()} />);
        fireEvent.click(screen.getByLabelText('Time'));
        expect(container).toMatchSnapshot();
    });

    it('should give time entered in the textfield', () => {
        const mockOnChange = jest.fn();
        render(<TimePicker label="Time" value="13:11" onChange={mockOnChange} />);
        fireEvent.change(screen.getByLabelText('Time'), { target: { value: '22:00' } });
        expect(mockOnChange).toBeCalledWith('22:00');
    });

    it('should give the expected time on selecting time from dialog', () => {
        const mockOnChange = jest.fn();
        render(<TimePicker label="Time" value="" onChange={mockOnChange} />);
        fireEvent.click(screen.getByLabelText('Time'));
        fireEvent.click(screen.getByTitle('hour-arrow-down'));
        fireEvent.click(screen.getByTitle('minutes-arrow-down'));
        fireEvent.click(screen.getByText('PM'));
        fireEvent.click(screen.getByText('Apply'));
        expect(mockOnChange).toBeCalledWith('13:01');
    });

    it('should reset the values on clicking on cancel button', () => {
        const mockOnChange = jest.fn();
        render(<TimePicker label="Time" value="" onChange={mockOnChange} />);
        fireEvent.click(screen.getByLabelText('Time'));
        fireEvent.click(screen.getByTitle('hour-arrow-down'));
        fireEvent.click(screen.getByTitle('minutes-arrow-down'));
        fireEvent.click(screen.getByText('PM'));
        fireEvent.click(screen.getByText('Cancel'));
        expect(mockOnChange).not.toBeCalled();
        expect(screen.queryByText('hour-arrow-down')).not.toBeInTheDocument();
    });

    it('should not render dialog for mobile devices', () => {
        Object.defineProperty(global?.navigator, 'userAgent', { configurable: true, value: { indexOf: () => 1 } });
        render(<TimePicker label="Time" value="" onChange={jest.fn()} />);
        fireEvent.click(screen.getByLabelText('Time'));
        expect(screen.queryByText('hour-arrow-down')).not.toBeInTheDocument();
    });
});
