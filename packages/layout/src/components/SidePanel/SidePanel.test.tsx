import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { SidePanelStyled as SidePanel } from './SidePanel.styled';

describe('SidePanel component', () => {
    it('should render with left positioned by degfault', () => {
        const { container } = TestUtils.render(<SidePanel />);
        expect(container).toMatchSnapshot();
    });

    it('should render with right positioned when position prop given as right', () => {
        const { container } = TestUtils.render(<SidePanel position="right" />);
        expect(container).toMatchSnapshot();
    });
});
