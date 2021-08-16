import { cleanup, render, screen } from '@test-utils';
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
                value={{ activeItem: 'dummy', isHovered: false, isExpanded: false, activeItemChangeHandler: () => null }}
            >
                <MedlySidenavHeader />
            </SidenavContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly even when custom company name and logo are passed', () => {
        const DummyLogo = () => <span>My Logo</span>;
        const DummyName = () => <span>My Name</span>;

        render(
            <SidenavContext.Provider
                value={{ activeItem: 'dummy', isHovered: true, isExpanded: true, activeItemChangeHandler: () => null }}
            >
                <MedlySidenavHeader companyLogo={DummyLogo} companyName={DummyName} />
            </SidenavContext.Provider>
        );
        expect(screen.getByText('My Logo')).toBeInTheDocument();
        expect(screen.getByText('My Name')).toBeInTheDocument();
    });
});
