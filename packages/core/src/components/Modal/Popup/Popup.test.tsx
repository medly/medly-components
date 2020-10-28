import { render } from '@test-utils';
import React from 'react';
import { Popup } from './Popup';
import { Props } from './types';

const ModalPopupRenderer = ({ open = true, isSmallScreen = true, minWidth, minHeight }: Props) => {
    return render(<Popup {...{ open, isSmallScreen, minWidth, minHeight }} />);
};

describe('Modal Popup component at small screen size', () => {
    it('should render properly when it is open', () => {
        const { container } = ModalPopupRenderer({ open: true, isSmallScreen: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is closed', () => {
        const { container } = ModalPopupRenderer({ open: false, isSmallScreen: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });
});
