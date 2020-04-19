import { cleanup, render } from '@test-utils';
import React from 'react';
import SidenavContext from '../SideNav.context';
import { ToggleSwitch } from './ToggleSwitch';

const renderer = (isActive = true, mockOnClick = jest.fn()) =>
    render(
        <SidenavContext.Provider value={{ activeItem: 'dummy', isHovered: true, isExpanded: true, activeItemChangeHandler: () => null }}>
            <ToggleSwitch id="dummy" isActive={isActive} onClick={mockOnClick} />
        </SidenavContext.Provider>
    );

describe('NavItem', () => {
    afterEach(cleanup);

    it('should render properly when it is showing hide option', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is showing open option', () => {
        const { container } = renderer(false);
        expect(container).toMatchSnapshot();
    });

    it('should call onClick when we click on it', () => {
        const mockOnClick = jest.fn();
        const { container } = renderer(true, mockOnClick);
        expect(container).toMatchSnapshot();
    });
});
