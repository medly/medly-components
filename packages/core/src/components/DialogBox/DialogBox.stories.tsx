import { defaultTheme, DialogBoxTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import React, { useCallback, useState } from 'react';
import Button from '../Button';
import { DialogBoxActionUserProps } from './Actions/types';
import { DialogBox } from './DialogBox';

const options = [
    { value: '0', label: 'Admin' },
    { value: '1', label: 'Pharmacist' },
    { value: '2', label: 'Covered Entity' }
];

export const ThemeInterface: React.FC<DialogBoxTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.modal
};

export const DialogBoxActionProps: React.FC<DialogBoxActionUserProps> = () => null;
DialogBoxActionProps.defaultProps = {
    alignItems: 'right'
};

const Form = styled('form')`
    & > * {
        margin-bottom: 1.6rem;
    }
`;

export const Basic = () => {
    const [modalState, setModalState] = useState(false);

    const changeModalState = useCallback(() => setModalState(val => !val), []);

    return (
        <>
            <Button onClick={changeModalState}>Click to Open</Button>
            <DialogBox open={modalState} onCloseModal={changeModalState} shouldCloseOnOutsideClick={true}>
                <DialogBox.Header>Are you sure?</DialogBox.Header>
                <DialogBox.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </DialogBox.Content>
                <DialogBox.Actions>
                    <Button variant="outlined">Delete</Button>
                    <Button variant="outlined" onClick={changeModalState}>Cancel</Button>
                </DialogBox.Actions>
            </DialogBox>
        </>
    );
};
