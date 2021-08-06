import { render } from '@test-utils';
import React from 'react';
import { Popup } from './Popup';
import { ModalPopupProps } from './types';

const ModalPopupRenderer = ({ open = true, minWidth, minHeight }: ModalPopupProps) => {
    return render(<Popup {...{ open, minWidth, minHeight }} />);
};

describe('Modal Popup component at small screen size', () => {
    it('should render properly when it is open', () => {
        const { container } = ModalPopupRenderer({ open: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is closed', () => {
        const { container } = ModalPopupRenderer({ open: false, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });
});
