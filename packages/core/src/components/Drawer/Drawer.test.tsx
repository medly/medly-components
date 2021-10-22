import { fireEvent, render, screen, waitFor } from '@test-utils';
import React, { useCallback, useState } from 'react';
import Drawer from './';

const DummyComponent: React.FC<{
    open?: boolean;
    position?: 'left' | 'right';
    alignFooterItems?: 'left' | 'center' | 'right';
    withOverlay?: boolean;
}> = ({ open = false, position = 'right', alignFooterItems = 'right', withOverlay = true }) => {
    const [drawerState, setDrawerState] = useState(open),
        hideDrawer = useCallback(() => setDrawerState(false), []);

    return (
        <Drawer open={drawerState} onClose={hideDrawer} position={position} withOverlay={withOverlay}>
            <Drawer.Header>
                <p>Test Header</p>
            </Drawer.Header>
            <Drawer.Content>CONTENT</Drawer.Content>
            <Drawer.Footer alignItems={alignFooterItems}>Test Footer</Drawer.Footer>
        </Drawer>
    );
};

const scrollTo = (scrollHeight: number, clientHeight: number, scrollTop: number) => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: scrollHeight });
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, value: clientHeight });
    Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: scrollTop });
};

describe('Drawer component', () => {
    beforeAll(() => scrollTo(500, 500, 0));

    const positions: ('left' | 'right')[] = ['left', 'right'];

    test.each(positions)('should render properly with %s positioned', async position => {
        const { container } = render(<DummyComponent position={position} open />);
        expect(container).toMatchSnapshot();
    });

    it('should not show overlay background color if withOverlay passed as false', async () => {
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', { configurable: true, value: 0 });
        const { container } = render(<DummyComponent open withOverlay={false} />);
        expect(container.querySelector('#medly-drawer-overlay')).toHaveStyle(`
            animation: none
        `);
    });

    it('should close drawer component on click on close icon', async () => {
        const { container } = render(<DummyComponent open />);
        fireEvent.click(screen.getByTitle('medly-drawer-close-icon'));
        fireEvent.animationEnd(container.querySelector('#medly-drawer') as HTMLDivElement);
        await waitFor(() => expect(container.querySelector('aside')).toBeNull());
    });

    it('should close drawer component on esc key press', async () => {
        const { container } = render(<DummyComponent open />);
        fireEvent.keyDown(container, { key: 'Escape', code: 27 });
        fireEvent.animationEnd(container.querySelector('#medly-drawer') as HTMLDivElement);
        await waitFor(() => expect(container.querySelector('aside')).toBeNull());
    });

    const testData: ['left' | 'center' | 'right', string][] = [
        ['left', 'flex-start'],
        ['center', 'center'],
        ['right', 'flex-end']
    ];

    test.each(testData)('should render footer element %s aligned', async (position, flexPosition) => {
        const { container } = render(<DummyComponent open alignFooterItems={position} />);
        expect(container.querySelector('#medly-drawer-footer')).toHaveStyle(`
            justify-content: ${flexPosition}
        `);
    });

    it('should hide shadow of header on scroll to top', () => {
        const { container } = render(<DummyComponent open />);
        scrollTo(800, 500, 0);
        fireEvent.scroll(container.querySelector('#medly-drawer-content') as HTMLDivElement, { target: { scrollY: 0 } });
        expect(container.querySelector('#medly-drawer-header')).not.toHaveStyle(
            `box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`
        );
        expect(container.querySelector('#medly-drawer-footer')).toHaveStyle(`box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
    });
    it('should hide shadow of footer on scroll to bottom', () => {
        const { container } = render(<DummyComponent open />);
        scrollTo(800, 500, 300);
        fireEvent.scroll(container.querySelector('#medly-drawer-content') as HTMLDivElement, { target: { scrollY: 300 } });
        expect(container.querySelector('#medly-drawer-header')).toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-drawer-footer')).not.toHaveStyle(
            `box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`
        );
    });

    it('should show shadow of header and footer on scroll', () => {
        const { container } = render(<DummyComponent open />);
        scrollTo(800, 500, 100);
        fireEvent.scroll(container.querySelector('#medly-drawer-content') as HTMLDivElement, { target: { scrollY: 100 } });
        expect(container.querySelector('#medly-drawer-header')).toHaveStyle(`box-shadow: 0 1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
        expect(container.querySelector('#medly-drawer-footer')).toHaveStyle(`box-shadow: 0 -1.8rem 1.6rem -1.6rem rgba(176,188,200,0.6)`);
    });
});
