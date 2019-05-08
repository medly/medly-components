import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import Text from '../../Text';
import { CloseModalContext } from '../Modal';
import { CloseButton, ModalHeaderStyled } from './ModalHeader.styled';

export const ModalHeader: React.SFC & WithStyle = props => {
    const handleClose = useContext(CloseModalContext);
    return (
        <ModalHeaderStyled {...props}>
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? (
                    <Text textWeight="Strong" textSize="L2">
                        {c}
                    </Text>
                ) : (
                    c
                );
            })}
            <CloseButton data-testid="modal-close-button" onClick={handleClose}>
                ×
            </CloseButton>
        </ModalHeaderStyled>
    );
};

ModalHeader.defaultProps = {
    open: false
};
ModalHeader.displayName = 'ModalHeader';
ModalHeader.Style = ModalHeaderStyled;

export default ModalHeader;
