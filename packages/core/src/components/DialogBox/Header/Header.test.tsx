import { render } from '@test-utils';
import React from 'react';
import { defaultValues, DialogBoxContext } from '../DialogBox.context';
import { Header } from './Header';

const DialogBoxHeaderRenderer = ({ isSmallScreen = true }: { isSmallScreen: boolean }) => {
    return render(
        <DialogBoxContext.Provider value={{ ...defaultValues, isSmallScreen }}>
            <Header>test</Header>
        </DialogBoxContext.Provider>
    );
};

describe('DialogBox component header', () => {
    it('should render properly at small screen size', () => {
        const { container } = DialogBoxHeaderRenderer({ isSmallScreen: true });
        expect(container).toMatchSnapshot();
    });
});
