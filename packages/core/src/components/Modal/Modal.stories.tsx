import { ModalTheme } from '@medly-components/theme';
import { useState } from '@storybook/addons';
import React from 'react';
import Button from '../Button';
import Input from '../Input';
import SingleSelect from '../SingleSelect';
import { Modal } from './Modal';

const options = [
    { value: '0', label: 'Admin' },
    { value: '1', label: 'Pharmacist' },
    { value: '2', label: 'Covered Entity' }
];

export const ThemeInterface = (props: ModalTheme): any => null;

export const Basic = () => {
    const [modalState, setModalState] = useState(false);

    const handleModalStateChange = (value: boolean) => () => setModalState(value);

    return (
        <>
            <Button onClick={handleModalStateChange(true)}>Click to Open</Button>
            <Modal open={modalState} onCloseModal={handleModalStateChange(false)}>
                <Modal.Header>Add User</Modal.Header>
                <Modal.Content>
                    <SingleSelect fullWidth options={options} defaultValue="0" />
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
                    <Input id="password-input" type="password" fullWidth required label="New Password" placeholder="Enter New Password" />
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
                </Modal.Content>
                <Modal.Actions>
                    <Button variant="outlined">Add User</Button>
                </Modal.Actions>
            </Modal>
        </>
    );
};
