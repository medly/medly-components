import { defaultTheme, DialogBoxTheme } from '@medly-components/theme';
import { useCallback, useState } from 'react';
import Button from '../Button';
import { DialogBoxActionUserProps } from './Actions/types';
import { DialogBox } from './DialogBox';
import type { FC } from 'react';

export const ThemeInterface: FC<DialogBoxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.modal
};

export const DialogBoxActionProps: FC<DialogBoxActionUserProps> = () => null;
DialogBoxActionProps.defaultProps = {
    alignItems: 'right'
};

export const Basic = () => {
    const [modalState, setModalState] = useState(false);

    const changeModalState = useCallback(() => setModalState(val => !val), []);

    return (
        <>
            <Button onClick={changeModalState}>Click to Open</Button>
            <DialogBox open={modalState} onCloseModal={changeModalState} shouldCloseOnOutsideClick={true}>
                <DialogBox.Header>Are you sure?</DialogBox.Header>
                <DialogBox.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </DialogBox.Content>
                <DialogBox.Actions>
                    <Button edges="rounded">Delete</Button>
                    <Button variant="outlined" edges="rounded" onClick={() => changeModalState()}>
                        Cancel
                    </Button>
                </DialogBox.Actions>
            </DialogBox>
        </>
    );
};
