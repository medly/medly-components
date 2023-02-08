import { defaultTheme, ModalTheme } from '@medly-components/theme';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import SingleSelect from '../SingleSelect';
import { ModalFooterProps } from './Footer/types';
import { Modal } from './Modal';

const options = [
    { value: '0', label: 'Admin' },
    { value: '1', label: 'Pharmacist' },
    { value: '2', label: 'Covered Entity' }
];

export const ThemeInterface: FC<ModalTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.modal
};

export const ModalActionProps: FC<ModalFooterProps> = () => null;
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

    const openModal = useCallback(() => setModalState(true), []);
    const closeModal = useCallback(() => setModalState(false), []);

    return (
        <ModalStoryWrapper expand={modalState}>
            <Button onClick={openModal}>Click to Open</Button>
            <Modal open={modalState} onClose={closeModal}>
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
                <Modal.Footer>
                    <Button variant="outlined">Add User</Button>
                </Modal.Footer>
            </Modal>
        </ModalStoryWrapper>
    );
};
