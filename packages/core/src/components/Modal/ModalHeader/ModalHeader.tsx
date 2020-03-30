import { ClearIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useContext } from 'react';
import Text from '../../Text';
import CloseModalContext from '../CloseModalContext';
import { CloseButton, ModalHeaderStyled } from './ModalHeader.styled';
import { Props } from './types';

export const ModalHeader: React.SFC<Props> & WithStyle = React.memo(props => {
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
            <CloseButton variant="flat" id={`${props.id || 'medly-modal'}-close-button`} onClick={handleClose}>
                <ClearIcon />
            </CloseButton>
        </ModalHeaderStyled>
    );
});

ModalHeader.defaultProps = {
    open: false
};
ModalHeader.displayName = 'ModalHeader';
ModalHeader.Style = ModalHeaderStyled;
