import { render } from '@test-utils';
import { SidePanelStyled as SidePanel } from './SidePanel.styled';

describe('SidePanel component', () => {
    it('should render with left positioned by default', () => {
        const { container } = render(<SidePanel />);
        expect(container).toMatchSnapshot();
    });

    it('should render with right positioned when position prop given as right', () => {
        const { container } = render(<SidePanel position="right" />);
        expect(container).toMatchSnapshot();
    });
});
