import { defaultTheme, DialogBoxTheme } from '@medly-components/theme';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import Button from '../Button';
import { DialogBox } from './DialogBox';
import { DialogBoxFooterProps } from './Footer/types';

export const ThemeInterface: FC<DialogBoxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.modal
};

export const DialogBoxActionProps: FC<DialogBoxFooterProps> = () => null;
DialogBoxActionProps.defaultProps = {
    alignItems: 'right'
};

export const Basic = () => {
    const [modalState, setModalState] = useState(false);

    const changeModalState = useCallback(() => setModalState(val => !val), []);

    return (
        <>
            <Button onClick={changeModalState}>Click to Open</Button>
            <DialogBox open={modalState} onClose={changeModalState} shouldCloseOnOutsideClick={true} showCloseIcon={true}>
                <DialogBox.Header>Are you sure?</DialogBox.Header>
                <DialogBox.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </DialogBox.Content>
                <DialogBox.Footer>
                    <Button edges="rounded">Delete</Button>
                    <Button variant="outlined" edges="rounded" onClick={() => changeModalState()}>
                        Cancel
                    </Button>
                </DialogBox.Footer>
            </DialogBox>
        </>
    );
};
