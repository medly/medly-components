import { render } from '@test-utils';
import React from 'react';
import { DrawerContext } from '../Drawer.context';
import { Header } from './Header';

describe('Drawer Header Test', () => {
    const contextValues = {
        id: 'medly-drawer',
        scrollState: {
            scrolledToTop: true,
            scrolledToBottom: false,
            scrollPosition: 0
        },
        dispatch: jest.fn(),
        onClose: jest.fn()
    };

    it('should render text if string is passed', () => {
        const { container } = render(
            <DrawerContext.Provider value={contextValues}>
                <Header>Demo Header</Header>
            </DrawerContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render component if its passed', () => {
        const { container } = render(
            <DrawerContext.Provider value={contextValues}>
                <Header>
                    <div>Render DIV</div>
                </Header>
            </DrawerContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
