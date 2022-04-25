import { cleanup, render, screen } from '@test-utils';
import SidenavContext from '../SideNav.context';
import { ToggleSwitch } from './ToggleSwitch';

const defaultProps = {
        isActive: true,
        onClick: jest.fn(),
        expandedToggleText: '',
        collapsedToggleText: '',
        isExpanded: true
    },
    renderer = (props = defaultProps) =>
        render(
            <SidenavContext.Provider
                value={{ activeItem: 'dummy', isHovered: true, isExpanded: props.isExpanded, activeItemChangeHandler: () => null }}
            >
                <ToggleSwitch id="dummy" {...props} />
            </SidenavContext.Provider>
        );

describe('NavItem', () => {
    afterEach(cleanup);

    it('should render properly when it is showing hide option', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is showing open option', () => {
        const { container } = renderer({ ...defaultProps, isActive: false });
        expect(container).toMatchSnapshot();
    });

    it('should call onClick when we click on it', () => {
        const mockOnClick = jest.fn();
        const { container } = renderer({ ...defaultProps, onClick: mockOnClick });
        expect(container).toMatchSnapshot();
    });

    it('should render with custom text passed showing hide option', () => {
        renderer({ ...defaultProps, expandedToggleText: 'Collapse' });
        expect(screen.getByText('Collapse')).toBeInTheDocument();
    });

    it('should render with custom text passed showing open option', () => {
        renderer({ ...defaultProps, expandedToggleText: 'Expand', isExpanded: false });
        expect(screen.getByText('Expand')).toBeInTheDocument();
    });
});
