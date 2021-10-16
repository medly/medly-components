import { defaultTheme, ModalTheme } from '@medly-components/theme';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import SingleSelect from '../SingleSelect';
import { ModalActionUserProps } from './Actions/types';
import { Modal } from './Modal';

const options = [
    { value: '0', label: 'Admin' },
    { value: '1', label: 'Pharmacist' },
    { value: '2', label: 'Covered Entity' }
];

export const ThemeInterface: React.FC<ModalTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.modal
};

export const ModalActionProps: React.FC<ModalActionUserProps> = () => null;
ModalActionProps.defaultProps = {
    alignItems: 'right'
};

const Form = styled('form')`
    & > * {
        margin-bottom: 1.6rem;
    }
`;

export const ModalStoryWrapper = styled('div')<{ expand: boolean }>`
    height: ${({ expand }) => (expand ? '50rem' : '5rem')};
`;

export const Basic = () => {
    const [modalState, setModalState] = useState(false);

    const changeModalState = useCallback(() => setModalState(val => !val), []);

    return (
        <ModalStoryWrapper expand={modalState}>
            <Button onClick={changeModalState}>Click to Open</Button>
            <Modal open={modalState} onCloseModal={changeModalState}>
                <Modal.Header>Add User</Modal.Header>
                <Modal.Content>
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
                </Modal.Content>
                <Modal.Actions>
                    <Button variant="outlined">Add User</Button>
                </Modal.Actions>
            </Modal>
        </ModalStoryWrapper>
    );
};
