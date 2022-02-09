import { HomeIcon } from '@medly-components/icons';
import { fireEvent, render, screen } from '@test-utils';
import Text from '../Text';
import { Toast } from './Toast';
import { ToastProps } from './types';

describe('Toast', () => {
    test.each(['error', 'warning', 'success', 'info'])('should render properly with %s variant', variant => {
        const { container } = render(<Toast id={1} variant={variant as ToastProps['variant']} />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with fullWidth prop', () => {
        const { container } = render(<Toast id={1} variant="success" message="Info message" fullWidth />);
        expect(container).toMatchSnapshot();
    });

    it('should render header and message text', () => {
        const { container } = render(<Toast id={1} variant="success" header="Heading 1" message="Info message" />);
        expect(container).toMatchSnapshot();
    });

    it('should render custom icons', () => {
        const { container } = render(<Toast id={1} variant="success" icon={HomeIcon} />);
        expect(container).toMatchSnapshot();
    });

    it('should not render close icon if hideCloseIcon is set to true', () => {
        render(<Toast id={1} variant="success" icon={HomeIcon} hideCloseIcon />);
        expect(screen.queryByTitle(`${1}-toast-close-icon`)).not.toBeInTheDocument();
    });

    it('should render custom message component', () => {
        render(<Toast id={1} variant="success" icon={HomeIcon} hideCloseIcon message={<Text>Dummy Message</Text>} />);
        expect(screen.getByText(`Dummy Message`)).toBeInTheDocument();
    });

    it('should render custom header component', () => {
        render(<Toast id={1} variant="success" icon={HomeIcon} hideCloseIcon header={<Text>Dummy Header</Text>} />);
        expect(screen.getByText(`Dummy Header`)).toBeInTheDocument();
    });

    it('should render action button', () => {
        const mockOnButtonClick = jest.fn(),
            { container } = render(<Toast id={1} variant="success" action={{ label: 'Action 1', onClick: mockOnButtonClick }} />);
        fireEvent.click(screen.getByRole('button', { name: 'Action 1' }));
        expect(mockOnButtonClick).toBeCalled();
        expect(container).toMatchSnapshot();
    });
});
