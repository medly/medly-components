import { render } from '@test-utils';
import React from 'react';
import Drawer from './';
import { Props } from './types';

const drawerRender = ({ open, onClose, width, position = 'right' }: Props) => {
    return render(
        <Drawer {...{ open, onClose, width, position }}>
            <Drawer.Header>
                <p>Test Header</p>
            </Drawer.Header>
            <Drawer.Content>CONTENT</Drawer.Content>
            <Drawer.Footer>Test Footer</Drawer.Footer>
        </Drawer>
    );
};

describe('Drawer component', () => {
    test.each(['left', 'right'])('should render with %s positioned by default', (position: 'left' | 'right') => {
        const { container } = drawerRender({ open: true, position: position, onClose: jest.fn() });
        expect(container).toMatchSnapshot();
    });
});
