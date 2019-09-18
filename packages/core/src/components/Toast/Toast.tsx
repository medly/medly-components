import { BugIcon, CheckCircleIcon, ClearIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useEffect, useState } from 'react';
import Text from '../Text';
import * as Styled from './Toast.styled';
import { Props } from './types';

export const Toast: React.SFC<Props> & WithStyle = React.memo(props => {
    const { variant, onClose, ...restProps } = props,
        [show, setShowState] = useState(false);

    useEffect(() => {
        setShowState(true);
    }, []);

    return (
        <Styled.Toast show={show} variant={variant} {...restProps}>
            {
                {
                    error: <BugIcon />,
                    warning: <ExclamationTriangleIcon />,
                    info: <ExclamationCircleIcon />,
                    success: <CheckCircleIcon />
                }[variant]
            }
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
            })}
            <ClearIcon onClick={onClose} />
        </Styled.Toast>
    );
});
Toast.displayName = 'Toast';
Toast.Style = Styled.Toast;

export default Toast;
