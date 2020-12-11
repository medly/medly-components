import { render } from '@test-utils';
import React from 'react';
import { Popup } from './Popup';
import { Props } from './types';

const DialogBoxPopupRenderer = ({ open = true, minWidth, minHeight }: Props) => {
    return render(<Popup {...{ open, minWidth, minHeight }} />);
};

describe('DialogBox Popup component at small screen size', () => {
    it('should render properly when it is open', () => {
        const { container } = DialogBoxPopupRenderer({ open: true, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is closed', () => {
        const { container } = DialogBoxPopupRenderer({ open: false, minWidth: '200px', minHeight: '200px' });
        expect(container).toMatchSnapshot();
    });
});
