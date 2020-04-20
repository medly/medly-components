import { cleanup, render } from '@test-utils';
import React from 'react';
import SidenavContext from '../SideNav.context';
import { MedlySidenavHeader } from './MedlySidenavHeader';

describe('Medly sidenav header', () => {
    afterEach(cleanup);

    it('should render properly when it is hovered', () => {
        const { container } = render(
            <SidenavContext.Provider
                value={{ activeItem: 'dummy', isHovered: true, isExpanded: true, activeItemChangeHandler: () => null }}
            >
                <MedlySidenavHeader />
            </SidenavContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is not hovered', () => {
        const { container } = render(
            <SidenavContext.Provider
                value={{ activeItem: 'dummy', isHovered: false, isExpanded: true, activeItemChangeHandler: () => null }}
            >
                <MedlySidenavHeader />
            </SidenavContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
