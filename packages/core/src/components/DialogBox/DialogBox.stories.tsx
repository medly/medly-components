import { defaultTheme, DialogBoxTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import React, { useCallback, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import SingleSelect from '../SingleSelect';
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
                <DialogBox.Header>Add User</DialogBox.Header>
                <DialogBox.Content>
                    <Form>
                        <SingleSelect label="Role" fullWidth options={options} value="0" />
                        <Input id="name-input" type="text" fullWidth label="Name" placeholder="Enter your Name" />
                        <Input
                            id="email-input"
                            type="email"
                            fullWidth
                            required
                            label="Email Address"
                            placeholder="Enter Email Address"
                            description="We will never share your email with anyone"
                        />
                        <Input
                            id="password-input"
                            type="password"
                            fullWidth
                            required
                            label="New Password"
                            placeholder="Enter New Password"
                        />
                        <Input
                            id="cpassword-input"
                            type="password"
                            fullWidth
                            required
                            label="Confirm Password"
                            placeholder="Enter Confirm Password"
                        />
                        <Input
                            id="tel-input"
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            fullWidth
                            label="Contact no."
                            placeholder="Enter your Contactno."
                        />
                    </Form>
                </DialogBox.Content>
                <DialogBox.Actions>
                    <Button variant="outlined">Delete</Button>
                    <Button variant="outlined">Cancel</Button>
                </DialogBox.Actions>
            </DialogBox>
        </>
    );
};
